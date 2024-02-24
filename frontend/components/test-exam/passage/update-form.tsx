'use client';

import { useEffect, useTransition } from 'react';
import { updatePassage } from '@/actions/test-exam/passage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useEditHook } from '@/global/use-edit-hook';
import { catchError } from '@/lib/utils';
import { PassageSchema } from '@/lib/validations/text-exam';
import { Dialog, DialogContentWithScrollArea } from '@/components/ui/dialog';
import { AutosizeTextarea } from '../../ui/autosize-text-area';
import { Button } from '../../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form';
import { Input } from '../../ui/input';

export function PassageUpdateForm() {
  const [isPending, startTransition] = useTransition();
  const { data, type, isOpen, onClose } = useEditHook();
  const isModalOpen = isOpen && type === 'editPassage';
  const passage = data?.passage;
  const form = useForm<z.infer<typeof PassageSchema>>({
    resolver: zodResolver(PassageSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  });
  useEffect(() => {
    if (passage) {
      form.setValue('title', passage.title);
      form.setValue('description', passage.description || '');
      form.setValue('type', passage.type);
      passage.type === 'PASSAGE_SIMPLE' &&
        form.setValue('content', passage.content || '');
    }
  }, [passage, form]);
  if (!passage || !isModalOpen) {
    return null;
  }
  const onSubmit = (values: z.infer<typeof PassageSchema>) => {
    startTransition(async () => {
      try {
        await updatePassage({
          formData: values,
          id: passage.id
        });

        toast.success('Updated');
        onClose();
      } catch (err) {
        catchError(err);
      }
    });
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContentWithScrollArea>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passage Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Hello"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passage description</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Read the text and answer questions"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {passage.type === 'PASSAGE_SIMPLE' && (
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passage content</FormLabel>
                      <FormControl>
                        <AutosizeTextarea
                          {...field}
                          disabled={isPending}
                          placeholder="Type content passage here."
                          className="h-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            <div>
              <Button disabled={isPending} variant="ghost" onClick={onClose}>
                Back
              </Button>
              <Button
                disabled={isPending}
                // variant="ghost"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </DialogContentWithScrollArea>
    </Dialog>
  );
}

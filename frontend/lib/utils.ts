import { ReadonlyURLSearchParams } from 'next/navigation';
import { QuestionGroup } from '@prisma/client';
import { type ClassValue, clsx } from 'clsx';
import { Editor, Transforms } from 'slate';
import { Element as SlateElement } from 'slate';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { CustomEditor } from '@/types/text-editor';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTotalQuestions = (questionGroup: QuestionGroup) => {
  return (
    questionGroup.endQuestionNumber - questionGroup.startQuestionNumber + 1
  );
};
export const withInline = (editor: CustomEditor) => {
  const { isInline } = editor;

  editor.isInline = (element) =>
    ['blank'].includes(element.type) || isInline(element);

  return editor;
};
export const countBlankOccurrences = ({
  editor,
  startQuesNum
}: {
  editor: CustomEditor;
  startQuesNum: number;
}) => {
  let blankCount = 0;

  for (const [node, path] of Editor.nodes(editor, {
    at: []
  })) {
    if (SlateElement.isElement(node) && node.type === 'blank') {
      const { type, ...props } = node;

      const newNode = {
        ...props,
        type,
        questionNumber: startQuesNum + blankCount
      };
      blankCount++;
      Transforms.setNodes(editor, { ...newNode }, { at: path });
    }
  }
  return blankCount;
};
// export const formatTime = (time: number) => {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;
//   return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// };
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast.error(errors.join('\n'));
  } else if (err instanceof Error) {
    return toast.error(err.message);
  } else {
    return toast.error('Something went wrong, please try again later.');
  }
}

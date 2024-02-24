import { Dispatch, SetStateAction, createContext } from 'react';
import { MatchingChoice } from '@prisma/client';

interface DndContextProps {
  questionGroupId: string;
  matchingChoiceList: MatchingChoice[];
  prevContent: string;
  choiceGroupOver: boolean;
  matchingChoiceId: string;
  questionId: string | null;
  type: 'question' | 'groupChoice' | null;
  setType: Dispatch<SetStateAction<'question' | 'groupChoice' | null>>;
  setChoiceGroupOver: Dispatch<SetStateAction<boolean>>;
  setQuestionId: Dispatch<SetStateAction<string | null>>;
  setPrevContent: Dispatch<SetStateAction<string>>;
  setMatchingChoiceList: Dispatch<SetStateAction<MatchingChoice[]>>;
  setQuestionGroupId: Dispatch<SetStateAction<string>>;
  setMatchingChoiceId: Dispatch<SetStateAction<string>>;
}

export const DndContext = createContext<DndContextProps>({
  questionGroupId: '',
  matchingChoiceId: '',
  matchingChoiceList: [],
  prevContent: '',
  choiceGroupOver: false,
  questionId: null,
  type: null,
  setType: () => {},
  setQuestionId: () => {},
  setChoiceGroupOver: () => {},
  setPrevContent: () => {},
  setMatchingChoiceList: () => {},
  setMatchingChoiceId: () => {},
  setQuestionGroupId: () => {}
});

import 'styled-components';

declare module 'styled-components' {
  export interface StepContentTheme {
    stepNumber: { color: string };
    title: { color: string };
    status: { background: string; color: string };
    description: { color: string };
  }
  export interface StepTheme {
    step: {
      pending: {
        background: string;
        color: string;
      };
      progress: {
        background: string;
        color: string;
      };
      completed: {
        background: string;
        color: string;
      };
    };
    content: {
      pending: {
        stepNumber: { color: string };
        title: { color: string };
        status: { background: string; color: string };
        description: { color: string };
      };
      progress: {
        stepNumber: { color: string };
        title: { color: string };
        status: { background: string; color: string };
        description: { color: string };
      };
      completed: {
        stepNumber: { color: string };
        title: { color: string };
        status: { background: string; color: string };
        description: { color: string };
      };
    };
    progressBar: {
      pending: {
        background: string;
      };
      progress: {
        background: string;
        fill: string;
      };
      completed: {
        background: string;
        fill: string;
      };
    };
  }
  export interface DefaultTheme {
    background?: string;
    color?: string;
    fill?: string;
  }
}

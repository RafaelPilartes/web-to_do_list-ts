import styled from 'styled-components'

export const TaskContainer = styled.section`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors['gray-500']};
  border: 0.1rem solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 0.5rem;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .iconDrop {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }

    p {
      font-size: 0.875rem;
      line-height: 1.18rem;
      color: ${({ theme }) => theme.colors['gray-100']};
    }

    .textCompleted {
      color: ${({ theme }) => theme.colors['gray-300']};
      text-decoration: line-through;
    }
  }
`
export const CheckContainer = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: none;

  div {
    width: 100%;
    height: 100%;
    border: 0.135rem solid ${({ theme }) => theme.colors['blue-1']};
    border-radius: 50%;
  }
`
export const ActionsContainer = styled.div`
  button {
    background: none;
    border: none;

    svg {
      color: ${({ theme }) => theme.colors['gray-300']};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors['blue-1']};
      }
      &:active {
        color: ${({ theme }) => theme.colors['blue-dark']};
      }
    }
  }
`

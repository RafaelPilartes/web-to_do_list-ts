import styled from 'styled-components'

export const TasksContainer = styled.section`
  width: 100%;
  max-width: 50rem;
  padding: 0 2rem;
  margin-top: 3.625rem;
`
export const TasksHeaderContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    p {
      color: ${({ theme }) => theme.colors['blue-1']};
      font-size: 0.875rem;
      font-weight: 700;
    }
    .purple {
      color: ${({ theme }) => theme.colors['purple-1']};
    }

    span {
      color: ${({ theme }) => theme.colors['gray-200']};
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.3rem 0.9rem;
      border-radius: 999rem;
      background: ${({ theme }) => theme.colors['gray-400']};
    }
  }
`

export const TasksListContainer = styled.div`
  width: 100%;
  margin-top: 1.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .sortableContainer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .empty {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    color: ${({ theme }) => theme.colors['gray-300']};
    align-items: center;

    svg {
      opacity: 0.3;
    }
    p {
      font-weight: 700;
    }
  }
`

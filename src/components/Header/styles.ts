import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;

  background: ${({ theme }) => theme.colors['gray-700']};
`
export const NewTaskFormContainer = styled.article`
  width: 100%;
  padding: 0 2rem;

  position: absolute;
  bottom: -1.6rem;

  width: 100%;
  max-width: 50rem;
  height: 3.375rem;
  min-height: 3.375rem;

  display: flex;
  gap: 0.4rem;

  input {
    height: 100%;
    flex: 1;
    color: ${({ theme }) => theme.colors['gray-100']};
    background: ${({ theme }) => theme.colors['gray-500']};
    border: none;
    border-radius: 0.5rem;
    // border: 0.1rem solid ${({ theme }) => theme.colors['gray-700']};
    padding: 0 1rem;
  }

  button {
    color: ${({ theme }) => theme.colors['gray-100']};
    background: ${({ theme }) => theme.colors['blue-dark']};
    border: none;
    border-radius: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors['gray-700']};
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;

    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors['purple-dark']};
    }
    &:active {
      background: ${({ theme }) => theme.colors['blue-dark']};
    }
  }
`

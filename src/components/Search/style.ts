import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-area: search;
  @media (max-width: 968px) {
    padding-top: 8px;
  }
`

export const Input = styled.input`
  border-radius: 4px !important;
  border: 1px solid var(--border-primary);
  background: var(--bg-primary); // ????
  color: var(--text-secondary);
  padding: 12px 16px;
  width: 100%;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  ::-webkit-input-placeholder {
    text-align: center;
  }
  ::-webkit-input-placeholder {
    text-align: center;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }
  :-ms-input-placeholder {
    text-align: center;
  }
  &:hover {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &:focus {
    background: var(--bg-secondary);
    border-radius: 4px !important;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &:active {
    border-radius: 4px !important;
  }
`

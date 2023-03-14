import styled from 'styled-components'

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 25.6rem;
  width: 100%;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 31rem;

  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px 36px;

  div#info {
    display: flex;
    flex-direction: column;

    gap: 0.8rem;
    text-align: center;

    strong {
      color: ${(props) => props.theme['base-700']};
    }

    span {
      color: ${(props) => props.theme['base-500']};
    }
  }
`

export const CardOptions = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.8rem;
  }
`

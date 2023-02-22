import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 5.6rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['base-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  margin-top: 3.2rem;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['base-500']};
      padding: 1.6rem;
      text-align: left;
      color: ${(props) => props.theme['base-100']};

      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['base-600']};
      border-top: 4px solid ${(props) => props.theme['base-700']};

      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }
      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`

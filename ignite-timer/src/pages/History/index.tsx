import { HistoryContainer, HistoryList } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 hours ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 hours ago</td>
              <td>Finished</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
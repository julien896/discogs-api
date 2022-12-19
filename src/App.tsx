import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { RecordsService } from './app/services/records_service'
import './App.css'
import { Example } from './Example'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Example />
      </div>
    </QueryClientProvider>
  )
}

export default App

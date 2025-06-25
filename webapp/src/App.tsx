import { getAllIdeasRoute, getViewIdeasRoute } from './lib/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WievIdeaPages } from './pages/WiewIdeaPages'
import { AllIdeasPage } from './pages/AllIdeasPages'
import { TrpcProvider } from './lib/trpc'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path={getViewIdeasRoute({ ideaNick: ':ideaNick' })} element={<WievIdeaPages />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

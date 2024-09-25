import MainLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./routes/ProtectedRoute"

function App() {
  return (
    <div className="">
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </div>
  )
}

export default App;

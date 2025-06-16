import { useTheme } from "../context/AnotherContext"

const ToggleTheme = () => {
  const {state, dispatch} = useTheme()
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${state.darkMode === true ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">{state.darkMode ? 'Light Mode' : 'Dark Mode'}</h1>
      <button className="border px-2 py-1 rounded" onClick={()=>dispatch({type: 'TOGGLE_THEME'})}>Toggle</button>
    </div>
  )
}

export default ToggleTheme
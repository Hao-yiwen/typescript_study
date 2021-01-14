import React,{useContext} from 'react'
import ReactDOM from 'react-dom'
import {useForm} from 'react-hook-form'

// export default function App(){
//     const {register,handleSubmit,watch,errors}=useForm();
//     const onSubmit=data=>console.log(data);

//     // console.log(watch("example"));

//     return(
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input name="example" defaultValue="test" ref={register}></input> 
//             {}

//             <input name="exampleRequired" ref={register({required:true})}></input>

//             {errors.exampleRequired && <span>This field is required</span>}

//             <input type="submit"></input>
//         </form>
//     )
// }

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)
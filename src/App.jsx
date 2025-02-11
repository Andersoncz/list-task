import { useState } from 'react'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: 'estudar programação para se tornar um desenvolvedor fullstack',
      isCopleted: false,
    },
    {
      id: 2,
      title: 'Estudar inglês',
      description: 'estudar inglês para se tornar fluente',
      isCopleted: false,
    },
    {
      id: 3,
      title: 'Estudar matemática',
      description: 'estudar matemática para se tornar um desenvolvedor fullstack',
      isCopleted: true,
    },
  ])
  function onClickTesks(TaskId) {
    const newTasks = tasks.map((task) => {
      //atualiza a propriedade isCopleted da tarefa clicada
      if (task.id === TaskId) {
        return { ...task, isCopleted: !task.isCopleted }
      }
      //não atualiza a tarefa
      return task
    })
    setTasks(newTasks)
  }

  //função para deletar tarefa
 function onDeleteTaskClick(TaskId) {
  const newTasks = tasks.filter((task) => task.id !== TaskId)
  setTasks(newTasks)



    
    
    }

    return (
      <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
        <div className='w-[500px]'>
          <h1 className='text-3xl text-slate-100'>Gerenciador de tarefas
          </h1>
          <AddTasks />
          <Tasks tasks={tasks}
            onClickTesks={onClickTesks} 
            onDeleteTaskClick={onDeleteTaskClick}/>
        </div>
      </div>
    )
  }
  
  export default App









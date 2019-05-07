const initState = {
  projects: [
    {id: '1', title: 'Finish my amazing application', content: 'here there should be some content'},
    {id: '2', title: 'Find and Kill me ExGirlfriend', content: 'here there should be some content'},
    {id: '3', title: 'Find out how to use new hooks in Redux', content: 'here there should be some content'}
  ]
}

const projectReducer = (state = initState, action) => { 
  return state;
}

export default projectReducer;
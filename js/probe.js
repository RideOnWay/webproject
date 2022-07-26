function  callObjects(){
  
  fetch('http://localhost:5500/js/objetosCafe.json') 
    .then(resp => resp.json())
    .then(data => {return data} );
    
  }

  async function fetchExam() {
    try {
        const response = await fetch('http://localhost:5500/js/objetosCafe.json', {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        return exam;
    } catch (error) {
        console.error(error);
    }
}

async function renderExam() {
    const exam = await fetchExam();
    
    console.log(exam['Tinto']);
    
}
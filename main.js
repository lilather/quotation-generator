const begQuote=[{
    text:"If you look up ",
    type:'inspiration'
  },{
    text:"When you least expect it ",
    type:'inspiration'
  },
           {
    text:"If you stay true ",
    type:'inner peace'
  },     
     {
    text:"When you are ready to quit ",
    type:'inspiration'
  },
      {
    text:"When you are anxious ",
    type:'inner peace'
  },     
      {
    text:"Just remember ",
    type:'inspiration'
  },                     
                 ]
  
  
  const midQuote=[{
    text:"please note ",
    type:'inspiration'
  },{
    text:"in time ",
    type:'inspiration'
  },
           {
    text:"be still ",
    type:'inner peace'
  },     
     {
    text:"with patience ",
    type:'inspiration'
  },
      {
    text:"with meditation ",
    type:'inner peace'
  },     
      {
    text:"just think ",
    type:'inspiration'
  },                     
                 ]
  
  const endQuote=[{
    text:"you have help! ",
    type:'inspiration'
  },{
    text:"you can do anything! ",
    type:'inspiration'
  },
           {
    text:"you are not alone! ",
    type:'inner peace'
  },     
     {
    text:"you will prevail! ",
    type:'inspiration'
  },
      {
    text:"all will be ok! ",
    type:'inner peace'
  },     
      {
    text:"if they can do it so can you!",
    type:'inspiration'
  },                     
  ]
  
  
  
  const generateQuoteBtn=document.querySelector('#generate-quote-btn');
  const quoteContainer=document.querySelector('.quote-container');
  const numQuotes=document.querySelector('#num-quotes');
  const type=document.querySelector('#type-quotes');
  // add event listner for button
  generateQuoteBtn.addEventListener("click", () => runQuote())
  // intilize quoutes
  let quotes=[];
  
  // get quotes
  function getQuote(...arrays){
  // init local quote varible as a string
  let currentQuote="";
  // loop through each array filter and combine random string fragment 
  arrays.forEach((array) => { 
  for (const innerArray of array) {
  // filter quote
  let fliteredQuote=innerArray.filter(qoute => qoute.type===type.value);
  // combine filtered quote fragments
  currentQuote+=fliteredQuote[Math.floor(Math.random()*(fliteredQuote.length-0) + 0)].text
  }})    
  // push combined string fragment into quotes array
  quotes.push(currentQuote)      
   
  }
  
                 
  
   function genList( ...arrays){
     //  get quote array as many times as there as there a numQuotes
    for(let i=0;  i < numQuotes.value; i++){
     getQuote(arrays)
    }
  }
  
   function  runQuote(){
    // empty the container div
   quoteContainer.innerHTML="";
    // clear the array of quotes by creating new empty arry
   quotes=[];
    // subscibe to observable and push values to current quote array
   genList(begQuote, midQuote, endQuote);
    // call function to create ui 
   populateDiv();
    
   }
    
    
  function populateDiv(){
    // foreach quoute create a new div and add quote to div
   quotes.forEach((quote)=>{
    let quoteDiv=document.createElement('div');
    quoteDiv.classList.add("qoute-div", "col-12") 
    quoteDiv.innerHTML=quote;
    quoteContainer.appendChild(quoteDiv)  
    })
    
  }
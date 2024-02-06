// const heading = React.createElement('h1',{class:"heading"},"hello world from React!");// we just create a heading tag using React createElement api which is the core concept of react
    
// const root = ReactDOM.createRoot(document.getElementById("root"));// where we can create a root which is the React DOM manipulation everything will render inside the root what is the root here the div over there
   
// root.render(heading);//we just render the heading inside the root

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement('h1',{},"from h1 of child1"),
React.createElement('h2',{},"form h2 0f child1")]),React.createElement("div",{id:"child2"},
[React.createElement('h1',{},"from child 2"),React.createElement('h2',{},"form child 2 of sibbinhg 2")]
)
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//ReactElement(object) => HTML(browser understand)
import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div className='p-5 md:px-52 mt-10'>
                <h1 className='text-3xl font-semibold'> Question 1: What is the perpouse of react router?</h1>
                <p className='text-start mt-4'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different "Route" s as it changes, and it also gives you tools to update the location using "Link" s and the history API.</p>
            </div>
            <div className=' p-5 md:px-52 mt-10'>
                <h1 className='text-3xl font-semibold'> Question 2: How does Context API work?</h1>
                <p className='text-start mt-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.</p>
            </div>
            <div className='p-5 md:px-52 mt-10'>
                <h1 className='text-3xl font-semibold'> Question 3: What is useRef?</h1>
                <p className='text-start mt-4'>However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes. This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a "current: ..." object yourself is that useRef will give you the same ref object on every render. Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.
                </p>
            </div>
        </div>
    );
};

export default Blog;
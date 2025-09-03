const Blog = () => {

  return (
    <div className="pt-16 max-w-[1500px] mx-auto">
      <div className="card bg-base-100 shadow-xl mb-5 md:mb-8 mx-4 sm:mx-8">
        <div className="card-body ml-4">
          <h2 className="card-title text-2xl -ml-4">Q: What are the different ways to manage a state in a React application?</h2>
          <p><strong className="mr-2 underline">Ans:</strong>There are four main types of state you need to properly manage in your React apps:
          </p>
          <ol className="list-decimal ml-8 mb-2">
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ol>
          <p><strong>Local (UI) state</strong> - Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</p>
          <p><strong>Global (UI) state</strong> - Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
          <p><strong>Server state</strong> - Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
          <p><strong>URL state</strong> - Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mb-5 md:mb-8 mx-4 sm:mx-8">
        <div className="card-body ml-4">
          <h2 className="card-title text-2xl -ml-4">Q: How does prototypical inheritance work?</h2>
          <p><strong className="mr-2 underline">Ans:</strong>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mb-5 md:mb-8 mx-4 sm:mx-8">
        <div className="card-body ml-4">
          <h2 className="card-title text-2xl -ml-4">Q: What is a unit test? Why should we write unit tests?</h2>
          <p><strong className="mr-2 underline">Ans:</strong>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
          </p>
          <p><span className="font-bold underline mr-2">How unit tests work:</span>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base. Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed. Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mb-5 md:mb-8 mx-4 sm:mx-8">
        <div className="card-body ml-4">
          <h2 className="card-title text-2xl -ml-4">Q: React vs. Angular vs. Vue?</h2>
          <p><strong className="mr-2 underline">Ans:</strong>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences. Each framework is component-based and allows the rapid creation of UI features. However, they all have a different structure and architecture — so first, we'll look into their architectural differences to understand the philosophy behind them.</p>
          <p>Angular.js offers a very clear structure and lots of features. It allows development teams to move quickly to implementation without the need to define structures or look for additional libraries. However, it is often too overloaded for small projects and brings unnecessary ballast. React is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly. Vue may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;

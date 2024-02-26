import "./dashboard.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { BiLogoVuejs } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandPhp } from "react-icons/tb";
import { TbBrandGolang } from "react-icons/tb";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">
          <div>
            <FaHtml5 />
            <span>Html</span>
          </div>
          <div>
            <p>{`HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.

HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img> and <input> directly introduce content into the page. Other tags such as <p> and </p> surround and provide information about document text and may include sub-element tags. Browsers do not display the HTML tags but use them to interpret the content of the page.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <div>
              <FaCss3Alt />
              <span>Css</span>
            </div>
            <div>
              <p>
                {`Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.This separation can improve content accessibility;[further explanation needed] provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.`}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <IoLogoJavascript />
            <span>Javascript</span>
          </div>
          <div>
            <p>{`JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <SiTypescript />
            <span>Typescript</span>
          </div>
          <div>
            <p>{`TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.[6] Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js, Deno or Bun). Multiple options are available for transpilation. The default TypeScript Compiler can be used,[7] or the Babel compiler can be invoked to convert TypeScript to JavaScript.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <RiReactjsLine />
            <span>Reactjs</span>
          </div>
          <div>
            <p>{`React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]

React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <FaAngular />
            <span>Angular</span>
          </div>
          <div>
            <p>{`Angular is a comprehensive JavaScript framework designed for building dynamic and interactive web applications. Maintained by Google, it supports the development of single-page applications (SPAs) with an architecture that facilitates the construction of complex applications through a set of cohesive tools and components.

The framework offers features like two-way data binding, modular development structures, dependency injection, and extensive testing capabilities, which are essential for modern web development. Angular is tailored to work smoothly with TypeScript, providing advantages such as static typing, classes, and interfaces that contribute to cleaner code and easier maintenance.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <BiLogoVuejs />
            <span>Vuejs</span>
          </div>
          <div>
            <p>{`Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only.[4] Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.[12]

Vue.js allows for extending HTML with HTML attributes called directives.[13] The directives offer functionality to HTML applications, and come as either built-in or user defined directives.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <TbBrandNextjs />
            <span>Nextjs</span>
          </div>
          <div>
            <p>{`NextJS is an open-source web development React-based framework created by Vercel, which is famous for its unique features such as Server-side rendering and enhanced SEO. It has some additional features such as data fetching utilities, dynamic API routes, optimized builds, etc. It is a framework built upon React, Webpack, and Babel.\nA traditional react application is rendered client-side whereas a NextJS application is used to create production-ready web applications. Learning NextJS requires knowledge of basic React and Web Development. The most popular use of NextJS is in making Landing pages and marketing websites. Also if we want our webpage to rank better on searches the inbuilt features of NextJS provide support for that functions.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <SiNuxtdotjs />
            <span>Nuxtjs</span>
          </div>
          <div>
            <p>{`Nuxt is a free and open source JavaScript library based on Vue.js, Nitro, and Vite. Nuxt is inspired by Next.js,[4] which is a framework of similar purpose, based on React.js.

The framework is advertised as a "Meta-framework for universal applications". The term universal is used here with the meaning that the goal of the framework is to enable users to create web views in JavaScript utilizing the Vue.js single file component system and that can function both as in-browser single page application (SPA) views as well as server-rendered web views which are then (after server rendering) "rehydrated" to full SPA functionality.[5][6] Additionally, the framework enables users to have the content, or parts of it, fully pre-rendered on the server and served in the manner of static site generators.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <FaBootstrap />
            <span>Bootstrap</span>
          </div>
          <div>
            <p>{`Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project. As such, the primary factor is whether the developers in charge find those choices to their liking. Once added to a project, Bootstrap provides basic style definitions for all HTML elements. The result is a uniform appearance for prose, tables and form elements across web browsers. In addition, developers can take advantage of CSS classes defined in Bootstrap to further customize the appearance of their contents. For example, Bootstrap has provisioned for light- and dark-colored tables, page headings, more prominent pull quotes, and text with a highlight.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <div>
              <IoLogoSass />
              <span>Sass</span>
            </div>
            <div>
              <p>
                {`Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.

Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.[2] It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.`}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <SiTailwindcss />
            <span>Tailwindcss</span>
          </div>
          <div>
            <p>{`Tailwind CSS is basically a Utility first CSS framework for building rapid custom UI. It is a highly customizable, low-level CSS framework that gives you all of the building blocks that you need. Also, it is a cool way to write inline styling and achieve an awesome interface without writing a single line of your own CSS.\nAs we know there are many CSS frameworks but people always choose the fast and easy framework to learn and use in the project. Tailwind has come with inbuilt a lot of features and styles for users to choose from and is also used to reduce the tendency of writing CSS code and create a beautiful custom UI. It will help you to overcome the complicated task. Tailwind CSS creates small utilities with a defined set of options enabling easy integration of existing classes directly into the HTML code.

           `}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <TbBrandNodejs />
            <span>Nodejs</span>
          </div>
          <div>
            <p>{`Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <SiExpress />
            <span>Expressjs</span>
          </div>
          <div>
            <p>{`Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.[4]

The original author, TJ Holowaychuk, described it as a Sinatra-inspired server,[5] meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library.[6]`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <SiMongodb />
            <span>Mongodb</span>
          </div>
          <div>
            <p>{`MongoDB is a source-available, cross-platform, document-oriented database. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc., and current versions are licensed under the Server Side Public License (SSPL). MongoDB is currently the 5th most popular database engine.[5]`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <TbBrandPhp />
            <span>Php</span>
          </div>
          <div>
            <p>{`This PHP tutorial will give you an in-depth understanding of the PHP scripting language. Whether you are a beginner or a professional PHP developer this free PHP tutorial gives you in-depth insights into PHP scripting language.

PHP (Hypertext Preprocessor) is a versatile and widely used server-side scripting language for creating dynamic and interactive web applications. Whether you’re a seasoned developer or a beginner eager to delve into the world of web development, this PHP tutorial is your gateway to mastering the intricacies of PHP programming.`}</p>
          </div>
        </div>
        <div className="card">
          <div>
            <TbBrandGolang />
            <span>Go</span>
          </div>
          <div>
            <p>{`Go is a procedural programming language. It was developed in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson at Google but launched in 2009 as an open-source programming language. Programs are assembled by using packages, for efficient management of dependencies. This language also supports environment adopting patterns alike to dynamic languages. For eg., type inference (y := 0 is a valid declaration of a variable y of type float).

Go is a statically typed, concurrent, and garbage-collected programming language created at Google in 2009. It is designed to be simple, efficient, and easy to learn, making it a popular choice for building scalable network services, web applications, and command-line tools.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

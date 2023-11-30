# tasks-with-progress
## Assignment
The assignment was to implement a collapsible list with checkboxes, where you can follow the overall percentage progress of the fulfilled tasks based on their "weight: from the overall tasks, like can be seen in this figma page: https://www.figma.com/file/0HPjyMf6r4ljGKGe4RgqZ3?embed_host=notion&kind=&node-id=0%3A1&viewer=1
## Environment
Use Node version 18 to run this code
React is used for the development with TS
## Running on local server
 - run to install dependencies: npm i
 - run to start: npm start
## Used external libraries

- axios is used to fetch data from the mock server
- MUI components are used as pre built building blocks to speed up the development

## Code parts and description

### Components
Overall there are two main components: the one that is showing the progress bar (ProgressBar), and the one that shows the list of tasks (TasksList). They are wrapped into the TasksWidget to form on single reusable component
### State
State is handled with a simple useState wrapped into a context, so that all components and their children might have easy access to the state without passing it down as props
### CSS
Since MUI version 5 was used it is better to style the MUI components with the sx prop. All the objects required for the sx props are grouped together in a styled file.

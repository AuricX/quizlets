const courseQuizzes = [
  {
    courseId: 1,
    courseName: "Mathematics 101",
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=600&q=80",
    quizzes: [
      {
        id: "math-quiz-1",
        title: "Algebra Basics",
        questions: [
          {
            id: "math-quiz-1-q1",
            prompt: "Solve for x: 2x + 3 = 11",
            options: [
              { id: "a", text: "x = 4", isCorrect: true },
              { id: "b", text: "x = 3", isCorrect: false },
              { id: "c", text: "x = 5", isCorrect: false },
              { id: "d", text: "x = 2", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-1-q2",
            prompt: "What is the slope of the line y = 4x - 2?",
            options: [
              { id: "a", text: "-2", isCorrect: false },
              { id: "b", text: "4", isCorrect: true },
              { id: "c", text: "2", isCorrect: false },
              { id: "d", text: "-4", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-1-q3",
            prompt: "Which expression represents the distributive property?",
            options: [
              { id: "a", text: "a + b = b + a", isCorrect: false },
              { id: "b", text: "(a + b) + c = a + (b + c)", isCorrect: false },
              { id: "c", text: "a(b + c) = ab + ac", isCorrect: true },
              { id: "d", text: "(ab)c = a(bc)", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "math-quiz-2",
        title: "Geometry Fundamentals",
        questions: [
          {
            id: "math-quiz-2-q1",
            prompt: "What is the sum of the interior angles of a triangle?",
            options: [
              { id: "a", text: "90°", isCorrect: false },
              { id: "b", text: "180°", isCorrect: true },
              { id: "c", text: "270°", isCorrect: false },
              { id: "d", text: "360°", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-2-q2",
            prompt: "A right triangle has legs of 3 and 4. What is the hypotenuse?",
            options: [
              { id: "a", text: "5", isCorrect: true },
              { id: "b", text: "6", isCorrect: false },
              { id: "c", text: "7", isCorrect: false },
              { id: "d", text: "4.5", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-2-q3",
            prompt: "What type of triangle has all sides equal?",
            options: [
              { id: "a", text: "Right triangle", isCorrect: false },
              { id: "b", text: "Isosceles triangle", isCorrect: false },
              { id: "c", text: "Equilateral triangle", isCorrect: true },
              { id: "d", text: "Scalene triangle", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "math-quiz-3",
        title: "Calculus Introduction",
        questions: [
          {
            id: "math-quiz-3-q1",
            prompt: "What is the derivative of x²?",
            options: [
              { id: "a", text: "x", isCorrect: false },
              { id: "b", text: "2x", isCorrect: true },
              { id: "c", text: "x²", isCorrect: false },
              { id: "d", text: "2", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-3-q2",
            prompt: "What does ∫ represent in mathematics?",
            options: [
              { id: "a", text: "Derivative", isCorrect: false },
              { id: "b", text: "Integral", isCorrect: true },
              { id: "c", text: "Summation", isCorrect: false },
              { id: "d", text: "Product", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-3-q3",
            prompt: "What is the limit of 1/x as x approaches infinity?",
            options: [
              { id: "a", text: "Infinity", isCorrect: false },
              { id: "b", text: "1", isCorrect: false },
              { id: "c", text: "0", isCorrect: true },
              { id: "d", text: "Undefined", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "math-quiz-4",
        title: "Statistics Basics",
        questions: [
          {
            id: "math-quiz-4-q1",
            prompt: "What is the mean of the numbers 2, 4, 6, 8?",
            options: [
              { id: "a", text: "4", isCorrect: false },
              { id: "b", text: "5", isCorrect: true },
              { id: "c", text: "6", isCorrect: false },
              { id: "d", text: "20", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-4-q2",
            prompt: "What is the median of 1, 3, 5, 7, 9?",
            options: [
              { id: "a", text: "3", isCorrect: false },
              { id: "b", text: "5", isCorrect: true },
              { id: "c", text: "7", isCorrect: false },
              { id: "d", text: "25", isCorrect: false },
            ],
          },
          {
            id: "math-quiz-4-q3",
            prompt: "Which measure shows the spread of data?",
            options: [
              { id: "a", text: "Mean", isCorrect: false },
              { id: "b", text: "Median", isCorrect: false },
              { id: "c", text: "Mode", isCorrect: false },
              { id: "d", text: "Standard deviation", isCorrect: true },
            ],
          },
        ],
      },
    ],
  },
  {
    courseId: 2,
    courseName: "History of Art",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=600&q=80",
    quizzes: [
      {
        id: "art-quiz-1",
        title: "Renaissance Art",
        questions: [
          {
            id: "art-quiz-1-q1",
            prompt: "Who painted the Mona Lisa?",
            options: [
              { id: "a", text: "Michelangelo", isCorrect: false },
              { id: "b", text: "Leonardo da Vinci", isCorrect: true },
              { id: "c", text: "Raphael", isCorrect: false },
              { id: "d", text: "Donatello", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-1-q2",
            prompt: "What city is considered the birthplace of the Renaissance?",
            options: [
              { id: "a", text: "Rome", isCorrect: false },
              { id: "b", text: "Florence", isCorrect: true },
              { id: "c", text: "Venice", isCorrect: false },
              { id: "d", text: "Milan", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-1-q3",
            prompt: "Which technique creates depth by converging lines?",
            options: [
              { id: "a", text: "Chiaroscuro", isCorrect: false },
              { id: "b", text: "Sfumato", isCorrect: false },
              { id: "c", text: "Linear perspective", isCorrect: true },
              { id: "d", text: "Fresco", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "art-quiz-2",
        title: "Modern Art Movements",
        questions: [
          {
            id: "art-quiz-2-q1",
            prompt: "Which movement is Pablo Picasso associated with?",
            options: [
              { id: "a", text: "Impressionism", isCorrect: false },
              { id: "b", text: "Cubism", isCorrect: true },
              { id: "c", text: "Surrealism", isCorrect: false },
              { id: "d", text: "Baroque", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-2-q2",
            prompt: "Which artist is known for the Campbell's Soup Cans?",
            options: [
              { id: "a", text: "Andy Warhol", isCorrect: true },
              { id: "b", text: "Jackson Pollock", isCorrect: false },
              { id: "c", text: "Mark Rothko", isCorrect: false },
              { id: "d", text: "Claude Monet", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-2-q3",
            prompt: "Which movement emphasized unconscious imagery?",
            options: [
              { id: "a", text: "Fauvism", isCorrect: false },
              { id: "b", text: "Surrealism", isCorrect: true },
              { id: "c", text: "Dadaism", isCorrect: false },
              { id: "d", text: "Realism", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "art-quiz-3",
        title: "Baroque and Rococo",
        questions: [
          {
            id: "art-quiz-3-q1",
            prompt: "Which artist painted 'The Night Watch'?",
            options: [
              { id: "a", text: "Caravaggio", isCorrect: false },
              { id: "b", text: "Rembrandt", isCorrect: true },
              { id: "c", text: "Rubens", isCorrect: false },
              { id: "d", text: "Vermeer", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-3-q2",
            prompt: "What does 'chiaroscuro' mean?",
            options: [
              { id: "a", text: "Use of gold leaf", isCorrect: false },
              { id: "b", text: "Perspective technique", isCorrect: false },
              { id: "c", text: "Light and dark contrast", isCorrect: true },
              { id: "d", text: "Fresco painting", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-3-q3",
            prompt: "Which period followed the Baroque?",
            options: [
              { id: "a", text: "Renaissance", isCorrect: false },
              { id: "b", text: "Rococo", isCorrect: true },
              { id: "c", text: "Neoclassical", isCorrect: false },
              { id: "d", text: "Gothic", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "art-quiz-4",
        title: "Impressionism",
        questions: [
          {
            id: "art-quiz-4-q1",
            prompt: "Who painted 'Water Lilies'?",
            options: [
              { id: "a", text: "Claude Monet", isCorrect: true },
              { id: "b", text: "Pierre-Auguste Renoir", isCorrect: false },
              { id: "c", text: "Edgar Degas", isCorrect: false },
              { id: "d", text: "Paul Cézanne", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-4-q2",
            prompt: "Which city was the center of Impressionism?",
            options: [
              { id: "a", text: "London", isCorrect: false },
              { id: "b", text: "Paris", isCorrect: true },
              { id: "c", text: "Amsterdam", isCorrect: false },
              { id: "d", text: "Vienna", isCorrect: false },
            ],
          },
          {
            id: "art-quiz-4-q3",
            prompt: "Impressionists focused on capturing what?",
            options: [
              { id: "a", text: "Historical events", isCorrect: false },
              { id: "b", text: "Religious themes", isCorrect: false },
              { id: "c", text: "Light and movement", isCorrect: true },
              { id: "d", text: "Geometric shapes", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },
  {
    courseId: 3,
    courseName: "Introduction to Programming",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    quizzes: [
      {
        id: "prog-quiz-1",
        title: "Variables and Data Types",
        questions: [
          {
            id: "prog-quiz-1-q1",
            prompt: "Which keyword declares a block-scoped variable in JavaScript?",
            options: [
              { id: "a", text: "var", isCorrect: false },
              { id: "b", text: "let", isCorrect: true },
              { id: "c", text: "def", isCorrect: false },
              { id: "d", text: "const", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-1-q2",
            prompt: "What is the data type of `true` in most programming languages?",
            options: [
              { id: "a", text: "String", isCorrect: false },
              { id: "b", text: "Boolean", isCorrect: true },
              { id: "c", text: "Integer", isCorrect: false },
              { id: "d", text: "Float", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-1-q3",
            prompt: "Which value represents 'no value' in JavaScript?",
            options: [
              { id: "a", text: "undefined", isCorrect: false },
              { id: "b", text: "null", isCorrect: true },
              { id: "c", text: "NaN", isCorrect: false },
              { id: "d", text: "0", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "prog-quiz-2",
        title: "Control Structures",
        questions: [
          {
            id: "prog-quiz-2-q1",
            prompt: "Which statement executes a block repeatedly while a condition is true?",
            options: [
              { id: "a", text: "if", isCorrect: false },
              { id: "b", text: "while", isCorrect: true },
              { id: "c", text: "switch", isCorrect: false },
              { id: "d", text: "break", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-2-q2",
            prompt: "What keyword exits a loop immediately?",
            options: [
              { id: "a", text: "continue", isCorrect: false },
              { id: "b", text: "return", isCorrect: false },
              { id: "c", text: "break", isCorrect: true },
              { id: "d", text: "stop", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-2-q3",
            prompt: "Which control structure is best for multiple exact value checks?",
            options: [
              { id: "a", text: "for loop", isCorrect: false },
              { id: "b", text: "do...while loop", isCorrect: false },
              { id: "c", text: "switch statement", isCorrect: true },
              { id: "d", text: "try...catch block", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "prog-quiz-3",
        title: "Functions and Scope",
        questions: [
          {
            id: "prog-quiz-3-q1",
            prompt: "What is a parameter in a function?",
            options: [
              { id: "a", text: "The function name", isCorrect: false },
              { id: "b", text: "A value passed to the function", isCorrect: true },
              { id: "c", text: "The return value", isCorrect: false },
              { id: "d", text: "A function body", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-3-q2",
            prompt: "What does a function return if no return statement is specified?",
            options: [
              { id: "a", text: "0", isCorrect: false },
              { id: "b", text: "null", isCorrect: false },
              { id: "c", text: "undefined", isCorrect: true },
              { id: "d", text: "false", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-3-q3",
            prompt: "What is lexical scope?",
            options: [
              { id: "a", text: "Global variables only", isCorrect: false },
              { id: "b", text: "Scope determined by code structure", isCorrect: true },
              { id: "c", text: "Function parameters", isCorrect: false },
              { id: "d", text: "Block-level variables", isCorrect: false },
            ],
          },
        ],
      },
      {
        id: "prog-quiz-4",
        title: "Arrays and Objects",
        questions: [
          {
            id: "prog-quiz-4-q1",
            prompt: "How do you access the first element of an array?",
            options: [
              { id: "a", text: "array[1]", isCorrect: false },
              { id: "b", text: "array[0]", isCorrect: true },
              { id: "c", text: "array.first()", isCorrect: false },
              { id: "d", text: "array.get(0)", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-4-q2",
            prompt: "Which method adds an element to the end of an array?",
            options: [
              { id: "a", text: "add()", isCorrect: false },
              { id: "b", text: "append()", isCorrect: false },
              { id: "c", text: "push()", isCorrect: true },
              { id: "d", text: "insert()", isCorrect: false },
            ],
          },
          {
            id: "prog-quiz-4-q3",
            prompt: "How do you access a property 'name' in an object 'person'?",
            options: [
              { id: "a", text: "person->name", isCorrect: false },
              { id: "b", text: "person.name", isCorrect: true },
              { id: "c", text: "person::name", isCorrect: false },
              { id: "d", text: "person[name]", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },
];

export default courseQuizzes;

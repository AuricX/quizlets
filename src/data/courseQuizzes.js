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
    ],
  },
];

export default courseQuizzes;

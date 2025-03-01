import { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    question: "🦘 If a kangaroo can hop 2 meters in one jump, how many jumps will it need to cover 14 meters?",
    options: ["5 jumps", "6 jumps", "7 jumps", "8 jumps"],
    correctAnswer: 2,
    explanation: "To find the number of jumps, divide the total distance by the distance per jump: 14 ÷ 2 = 7 jumps",
    difficulty: "easy",
    category: "arithmetic",
    ageGroup: 6,
    hints: [
      "Think about how far the kangaroo goes in one jump",
      "You can divide the total distance by the distance per jump",
      "14 divided by 2 will give you the answer"
    ]
  },
  {
    question: "🔢 A sequence starts with 2 and each next number is 3 more than the previous number. What is the 5th number in the sequence?",
    options: ["11", "14", "17", "20"],
    correctAnswer: 1,
    explanation: "The sequence is: 2, 5, 8, 11, 14. Adding 3 each time.",
    difficulty: "medium",
    category: "algebra",
    ageGroup: 8,
    hints: [
      "Start writing out the sequence from the beginning",
      "Add 3 to each number to get the next one",
      "You need to find the fifth number in the sequence"
    ]
  },
  {
    question: "📏 What is the area of a rectangle with length 8 cm and width 6 cm?",
    options: ["14 cm²", "24 cm²", "48 cm²", "54 cm²"],
    correctAnswer: 2,
    explanation: "Area of a rectangle = length × width = 8 × 6 = 48 cm²",
    difficulty: "easy",
    category: "geometry",
    ageGroup: 7,
    hints: [
      "Area is the space inside a shape",
      "For rectangles, multiply length times width",
      "8 times 6 will give you the area"
    ]
  },
  {
    question: "🧮 If 3x + 7 = 22, what is the value of x?",
    options: ["3", "5", "7", "15"],
    correctAnswer: 1,
    explanation: "Subtract 7 from both sides: 3x = 15, then divide by 3: x = 5",
    difficulty: "medium",
    category: "algebra",
    ageGroup: 8,
    hints: [
      "First, subtract 7 from both sides of the equation",
      "After subtracting, you'll have 3x = 15",
      "To find x, divide both sides by 3"
    ]
  },
  {
    question: "🦘 In a group of kangaroos, there are twice as many adults as babies. If there are 12 adults, how many kangaroos are there in total?",
    options: ["12", "18", "24", "36"],
    correctAnswer: 1,
    explanation: "If there are 12 adults and half as many babies (6), then total = 12 + 6 = 18",
    difficulty: "easy",
    category: "arithmetic",
    ageGroup: 6,
    hints: [
      "First find out how many baby kangaroos there are",
      "The number of babies is half the number of adults",
      "Add the number of adults and babies together"
    ]
  },
  {
    question: "🎈 Sally has 3 red balloons and 5 blue balloons. How many balloons does she have in total?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 2,
    explanation: "Add the red and blue balloons: 3 + 5 = 8 balloons",
    difficulty: "easy",
    category: "arithmetic",
    ageGroup: 6,
    hints: [
      "Count the red balloons first",
      "Then count the blue balloons",
      "Add the two numbers together"
    ]
  },
  {
    question: "🍎 If you have 15 apples and give away 1/3 of them, how many apples do you have left?",
    options: ["5", "10", "12", "8"],
    correctAnswer: 1,
    explanation: "First find 1/3 of 15 (which is 5), then subtract from total: 15 - 5 = 10 apples",
    difficulty: "medium",
    category: "arithmetic",
    ageGroup: 7,
    hints: [
      "First calculate what 1/3 of 15 is",
      "To find 1/3, divide 15 by 3",
      "Subtract the amount you gave away from the total"
    ]
  },
  {
    question: "📐 What is the perimeter of a square with sides of 7 cm?",
    options: ["14 cm", "21 cm", "28 cm", "35 cm"],
    correctAnswer: 2,
    explanation: "Multiply the length of one side by 4: 7 × 4 = 28 cm",
    difficulty: "easy",
    category: "geometry",
    ageGroup: 7,
    hints: [
      "A square has four equal sides",
      "Perimeter means the distance around the shape",
      "Multiply the length of one side by 4"
    ]
  },
  {
    question: "🎨 If you mix 2 parts blue paint with 3 parts yellow paint, what fraction of the mixture is blue?",
    options: ["1/3", "2/5", "3/5", "2/3"],
    correctAnswer: 1,
    explanation: "Total parts = 2 + 3 = 5, blue parts = 2, so fraction is 2/5",
    difficulty: "medium",
    category: "arithmetic",
    ageGroup: 8,
    hints: [
      "Add up all the parts to find the total",
      "The blue parts will be the numerator (top number)",
      "The total parts will be the denominator (bottom number)"
    ]
  },
  {
    question: "🎯 A target has 3 rings worth 3, 5, and 10 points from outer to inner. If an archer hits each ring exactly twice, what's their total score?",
    options: ["26 points", "28 points", "36 points", "42 points"],
    correctAnswer: 2,
    explanation: "Each ring is hit twice, so: (3 × 2) + (5 × 2) + (10 × 2) = 6 + 10 + 20 = 36 points",
    difficulty: "medium",
    category: "arithmetic",
    ageGroup: 9,
    hints: [
      "Calculate points for each ring separately",
      "Remember each ring is hit twice",
      "Add up all the points from all rings"
    ]
  },
  {
    question: "📊 In a class of 30 students, 40% are boys. How many girls are in the class?",
    options: ["12", "18", "15", "20"],
    correctAnswer: 1,
    explanation: "40% boys means 40% of 30 = 12 boys. Therefore, girls = 30 - 12 = 18",
    difficulty: "medium",
    category: "arithmetic",
    ageGroup: 9,
    hints: [
      "First find how many boys are in the class (40% of 30)",
      "40% is the same as 0.4, multiply 30 by 0.4",
      "Subtract the number of boys from the total students"
    ]
  },
  {
    question: "⚖️ If 2.5 kg of apples cost $7.50, how much would 4 kg cost?",
    options: ["$10.00", "$12.00", "$12.50", "$15.00"],
    correctAnswer: 1,
    explanation: "First find cost per kg: $7.50 ÷ 2.5 = $3 per kg. Then multiply: $3 × 4 = $12",
    difficulty: "hard",
    category: "arithmetic",
    ageGroup: 9,
    hints: [
      "Find the cost of 1 kg first",
      "Divide $7.50 by 2.5 to get the price per kg",
      "Multiply the price per kg by 4"
    ]
  },
  {
    question: "🔄 What comes next in the pattern: 1, 4, 9, 16, 25, ...?",
    options: ["30", "36", "42", "49"],
    correctAnswer: 1,
    explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², so next is 6² = 36",
    difficulty: "hard",
    category: "algebra",
    ageGroup: 10,
    hints: [
      "Look at how each number relates to its position",
      "Try squaring the position numbers (1, 2, 3, 4, 5)",
      "The next position would be 6, so square that number"
    ]
  },
  {
    question: "📐 A rectangle has a perimeter of 30 cm and a width of 5 cm. What is its length?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    correctAnswer: 0,
    explanation: "Perimeter = 2(length + width). 30 = 2(length + 5). 15 = length + 5. So length = 10 cm",
    difficulty: "hard",
    category: "geometry",
    ageGroup: 10,
    hints: [
      "Perimeter = 2 × (length + width)",
      "Plug in what you know: 30 = 2 × (length + 5)",
      "Solve the equation step by step"
    ]
  },
  {
    question: "🎪 A circus tent is supported by 8 poles. Each pole casts a shadow 6 meters long. What is the total length of all shadows?",
    options: ["14 meters", "24 meters", "48 meters", "54 meters"],
    correctAnswer: 2,
    explanation: "Multiply the length of one shadow by the number of poles: 6 × 8 = 48 meters",
    difficulty: "medium",
    category: "arithmetic",
    ageGroup: 9,
    hints: [
      "Each pole has the same shadow length",
      "You need to find the total for all poles",
      "Multiply the length of one shadow by the number of poles"
    ]
  },
  {
    question: "🌡️ The temperature rises from -3°C to 7°C. What is the total temperature change?",
    options: ["4°C", "7°C", "10°C", "13°C"],
    correctAnswer: 2,
    explanation: "To find the change, subtract: 7 - (-3) = 7 + 3 = 10°C",
    difficulty: "hard",
    category: "arithmetic",
    ageGroup: 10,
    hints: [
      "Think about the distance between the two temperatures",
      "Remember that subtracting a negative is the same as adding",
      "Calculate: 7 - (-3)"
    ]
  },
  {
    question: "🏃 A runner completes 3/4 of a race in 30 minutes. At this same pace, how many minutes will the entire race take?",
    options: ["35 minutes", "40 minutes", "45 minutes", "50 minutes"],
    correctAnswer: 1,
    explanation: "If 3/4 takes 30 minutes, then 1/4 takes 10 minutes. Total time = 30 + 10 = 40 minutes",
    difficulty: "hard",
    category: "arithmetic",
    ageGroup: 10,
    hints: [
      "Find out how long 1/4 of the race takes",
      "If 3/4 takes 30 minutes, divide 30 by 3 to get time for 1/4",
      "Add the time for the remaining 1/4 to 30 minutes"
    ]
  }
] 
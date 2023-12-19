// create random workout options

const workoutOptions = {
    pushups: [{ goal: 20, time: 2 }, { goal: 40, time: 4 }, { goal: 60, time: 6 }],
    pullups: [{ goal: 10, time: 2 }, { goal: 20, time: 4 }, { goal: 30, time: 6 }],
    skips: [{ goal: 200, time: 3 }, { goal: 400, time: 6 }, { goal: 600, time: 9 }],
    squats: [{ goal: 30, time: 3 }, { goal: 60, time: 6 }, { goal: 90, time: 9 }],
    highknees: [{ goal: 2, time: 2 }, { goal: 4, time: 4 }, { goal: 6, time: 6 }], // Time in minutes
    jumping_jacks: [{ goal: 50, time: 2 }, { goal: 100, time: 4 }, { goal: 150, time: 6 }],
    lunges: [{ goal: 30, time: 3 }, { goal: 60, time: 6 }, { goal: 90, time: 9 }],
    burpees: [{ goal: 15, time: 2 }, { goal: 30, time: 4 }, { goal: 45, time: 6 }],
    mountain_climbers: [{ goal: 2, time: 2 }, { goal: 4, time: 4 }, { goal: 6, time: 6 }], // Time in minutes
    planks: [{ goal: '1m', time: 1 }, { goal: '2m', time: 2 }, { goal: '3m', time: 3 }] // Goals as duration
  };

// creating a utility function for randomly selecting an element

const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// function to select a random exercise

function getRandomWorkout() {
  const exercises = Object.keys(workoutOptions);
  const selectedExercise = getRandomElement(exercises);
  const selectedGoal = getRandomElement(workoutOptions[selectedExercise]);

  return {
      exercise: selectedExercise,
      goal: selectedGoal.goal,
      time: selectedGoal.time
  };
}

// generate 15 min workout

function generate15MinWorkout() {
  let totalWorkoutTime = 0;
  const workoutPlan = [];

  while (totalWorkoutTime < 15) {
      const workout = getRandomWorkout();
      if (totalWorkoutTime + workout.time <= 15) {
          const exerciseSentence = `Do ${workout.goal} ${workout.exercise} for about ${workout.time} minutes.`;
          workoutPlan.push(exerciseSentence);
          totalWorkoutTime += workout.time;
      }
  }

  return "Today's workout plan: " + workoutPlan.join(' Then, ');
}

// Running the final code

const workoutPlan = generate15MinWorkout();
console.log(workoutPlan);

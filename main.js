const workouts = [
    // ENERGETIC
    { mood: "energetic", time: "15", intensity: "beginner", name: "Quick Energy Blast", description: [
      "Do 30 seconds of jumping jacks.",
      "Rest for 30 seconds.",
      "Do 30 seconds of high knees.",
      "Rest for 30 seconds.",
      "Do 30 seconds of mountain climbers.",
      "Rest for 30 seconds.",
      "Repeat the circuit 3 times."
    ]},
    { mood: "energetic", time: "15", intensity: "intermediate", name: "Tabata Burn", description: [
      "Do 20 seconds of burpees.",
      "Rest for 10 seconds.",
      "Do 20 seconds of squat jumps.",
      "Rest for 10 seconds.",
      "Do 20 seconds of push-ups.",
      "Rest for 10 seconds.",
      "Repeat the circuit 8 times."
    ]},
    { mood: "energetic", time: "15", intensity: "advanced", name: "HIIT Sprint", description: [
      "Sprint in place for 40 seconds.",
      "Rest for 20 seconds.",
      "Do 40 seconds of tuck jumps.",
      "Rest for 20 seconds.",
      "Do 40 seconds of plyo push-ups.",
      "Rest for 20 seconds.",
      "Repeat the circuit 3 times."
    ]},
  
    { mood: "energetic", time: "30", intensity: "beginner", name: "Full Body Circuit", description: [
      "Do 45 seconds of bodyweight squats.",
      "Rest for 15 seconds.",
      "Do 45 seconds of lunges.",
      "Rest for 15 seconds.",
      "Do 45 seconds of push-ups (on knees if needed).",
      "Rest for 15 seconds.",
      "Hold a plank for 30 seconds.",
      "Rest for 30 seconds.",
      "Repeat the circuit 4 times."
    ]},
    { mood: "energetic", time: "30", intensity: "intermediate", name: "Cardio & Core", description: [
      "Jump rope for 1 minute.",
      "Do 1 minute of mountain climbers.",
      "Do 1 minute of bicycle crunches.",
      "Do 1 minute of Russian twists.",
      "Rest for 1 minute.",
      "Repeat the circuit 3 times."
    ]},
    { mood: "energetic", time: "30", intensity: "advanced", name: "Explosive Power", description: [
      "Do 1 minute of box jumps.",
      "Do 1 minute of burpees.",
      "Do 1 minute of push-up to T.",
      "Do 1 minute of plank jacks.",
      "Rest for 1 minute.",
      "Repeat the circuit 4 times."
    ]},
  
    { mood: "energetic", time: "45", intensity: "beginner", name: "Endurance Builder", description: [
      "March in place for 1 minute.",
      "Do step-ups for 1 minute.",
      "Hold a wall sit for 1 minute.",
      "Do arm circles for 1 minute.",
      "Rest for 1 minute.",
      "Repeat the circuit 5 times."
    ]},
    { mood: "energetic", time: "45", intensity: "intermediate", name: "Strength & Sweat", description: [
      "Do 1 minute of push-ups.",
      "Do 1 minute of squats.",
      "Do 1 minute of lunges.",
      "Hold a plank for 1 minute.",
      "Do 1 minute of jumping jacks.",
      "Rest for 1 minute.",
      "Repeat the circuit 5 times."
    ]},
    { mood: "energetic", time: "45", intensity: "advanced", name: "Athlete Challenge", description: [
      "Do 1 minute of burpees.",
      "Do 1 minute of pistol squats (each leg).",
      "Hold a handstand for 1 minute (against wall if needed).",
      "Sprint in place for 1 minute.",
      "Rest for 1 minute.",
      "Repeat the circuit 5 times."
    ]},
  
    { mood: "energetic", time: "60", intensity: "beginner", name: "Active Hour", description: [
      "Brisk walk for 10 minutes.",
      "Light jog for 10 minutes.",
      "Do a bodyweight circuit (squats, push-ups, lunges) for 10 minutes.",
      "Stretch for 10 minutes.",
      "Repeat the sequence once."
    ]},
    { mood: "energetic", time: "60", intensity: "intermediate", name: "Power Hour", description: [
      "HIIT workout for 15 minutes (burpees, mountain climbers, jumping jacks).",
      "Strength training for 15 minutes (push-ups, squats, lunges).",
      "Core workout for 15 minutes (planks, crunches, leg raises).",
      "Flexibility/stretching for 15 minutes."
    ]},
    { mood: "energetic", time: "60", intensity: "advanced", name: "Beast Mode", description: [
      "15 minutes of HIIT (sprints, burpees, tuck jumps).",
      "15 minutes of plyometrics (box jumps, jump lunges, clap push-ups).",
      "15 minutes of heavy strength (weighted squats, push-ups, pull-ups).",
      "15 minutes of advanced core (plank holds, V-ups, Russian twists)."
    ]},
  
    // TIRED
    { mood: "tired", time: "15", intensity: "beginner", name: "Gentle Stretch", description: [
      "Do neck rolls for 30 seconds.",
      "Do shoulder shrugs for 30 seconds.",
      "Hold a gentle forward fold for 30 seconds.",
      "Do gentle yoga poses (child's pose, cat-cow) for 1 minute.",
      "Repeat as needed."
    ]},
    { mood: "tired", time: "15", intensity: "intermediate", name: "Wake Up Flow", description: [
      "Do cat-cow stretches for 1 minute.",
      "Hold downward dog for 1 minute.",
      "Hold child's pose for 1 minute.",
      "Do light squats for 1 minute.",
      "Repeat the sequence 3 times."
    ]},
    { mood: "tired", time: "15", intensity: "advanced", name: "Mobility Boost", description: [
      "Do dynamic stretches for 1 minute.",
      "Do deep lunges for 1 minute (each leg).",
      "Do hip openers for 1 minute.",
      "Repeat the sequence 3 times."
    ]},
  
    { mood: "tired", time: "30", intensity: "beginner", name: "Relax & Move", description: [
      "Take a slow walk for 10 minutes.",
      "Do gentle yoga for 10 minutes.",
      "Practice deep breathing for 10 minutes."
    ]},
    { mood: "tired", time: "30", intensity: "intermediate", name: "Stretch & Strengthen", description: [
      "Do a yoga flow for 10 minutes.",
      "Do bodyweight squats for 10 minutes (rest as needed).",
      "Do light core exercises (planks, bridges) for 10 minutes."
    ]},
    { mood: "tired", time: "30", intensity: "advanced", name: "Active Recovery", description: [
      "Foam roll major muscle groups for 10 minutes.",
      "Do dynamic stretching for 10 minutes.",
      "Do light HIIT (jumping jacks, high knees) for 10 minutes."
    ]},
  
    { mood: "tired", time: "45", intensity: "beginner", name: "Mindful Movement", description: [
      "Walk at a comfortable pace for 15 minutes.",
      "Do full-body stretching for 15 minutes.",
      "Practice meditation or deep breathing for 15 minutes."
    ]},
    { mood: "tired", time: "45", intensity: "intermediate", name: "Yoga & Core", description: [
      "Do a yoga flow for 15 minutes.",
      "Hold planks and bridges for 15 minutes (alternate).",
      "Stretch for 15 minutes."
    ]},
    { mood: "tired", time: "45", intensity: "advanced", name: "Mobility & HIIT", description: [
      "Do mobility drills for 15 minutes.",
      "Do light HIIT (mountain climbers, jumping jacks) for 15 minutes.",
      "Foam roll for 15 minutes."
    ]},
  
    { mood: "tired", time: "60", intensity: "beginner", name: "Restorative Hour", description: [
      "Gentle yoga for 20 minutes.",
      "Walking for 20 minutes.",
      "Meditation or deep breathing for 20 minutes."
    ]},
    { mood: "tired", time: "60", intensity: "intermediate", name: "Stretch & Flow", description: [
      "Yoga for 20 minutes.",
      "Stretching for 20 minutes.",
      "Light strength exercises for 20 minutes."
    ]},
    { mood: "tired", time: "60", intensity: "advanced", name: "Active Recovery Pro", description: [
      "Mobility work for 20 minutes.",
      "Yoga for 20 minutes.",
      "Light HIIT for 20 minutes."
    ]},
  
    // SAD
    { mood: "sad", time: "15", intensity: "beginner", name: "Mood Booster Yoga", description: [
      "Do sun salutations for 2 minutes.",
      "Practice deep breathing for 2 minutes.",
      "Hold gentle yoga poses (child's pose, cobra) for 2 minutes each.",
      "Repeat as needed."
    ]},
    { mood: "sad", time: "15", intensity: "intermediate", name: "Feel Good Flow", description: [
      "Do a yoga flow for 3 minutes.",
      "Do light cardio (march in place) for 2 minutes.",
      "Say positive affirmations for 1 minute.",
      "Repeat the sequence 3 times."
    ]},
    { mood: "sad", time: "15", intensity: "advanced", name: "Express Release", description: [
      "Shadow box for 1 minute.",
      "Do jumping jacks for 1 minute.",
      "Do yoga for 1 minute.",
      "Repeat the sequence 5 times."
    ]},
  
    { mood: "sad", time: "30", intensity: "beginner", name: "Gentle Cardio", description: [
      "Walk for 10 minutes.",
      "Do step-touches for 10 minutes.",
      "Stretch for 10 minutes."
    ]},
    { mood: "sad", time: "30", intensity: "intermediate", name: "Mood Lifter", description: [
      "Dance to your favorite song for 10 minutes.",
      "Do yoga for 10 minutes.",
      "Do core exercises for 10 minutes."
    ]},
    { mood: "sad", time: "30", intensity: "advanced", name: "Energy Shift", description: [
      "HIIT (burpees, mountain climbers) for 10 minutes.",
      "Yoga for 10 minutes.",
      "Meditation for 10 minutes."
    ]},
  
    { mood: "sad", time: "45", intensity: "beginner", name: "Uplifting Walk", description: [
      "Brisk walk for 15 minutes.",
      "Stretch for 15 minutes.",
      "Write down things you're grateful for for 15 minutes."
    ]},
    { mood: "sad", time: "45", intensity: "intermediate", name: "Dance & Flow", description: [
      "Dance for 15 minutes.",
      "Yoga for 15 minutes.",
      "Core exercises for 15 minutes."
    ]},
    { mood: "sad", time: "45", intensity: "advanced", name: "Release & Recharge", description: [
      "HIIT for 15 minutes.",
      "Yoga for 15 minutes.",
      "Meditation for 15 minutes."
    ]},
  
    { mood: "sad", time: "60", intensity: "beginner", name: "Feel Good Hour", description: [
      "Walk for 20 minutes.",
      "Yoga for 20 minutes.",
      "Meditation for 20 minutes."
    ]},
    { mood: "sad", time: "60", intensity: "intermediate", name: "Mood Makeover", description: [
      "Dance for 20 minutes.",
      "Yoga for 20 minutes.",
      "HIIT for 20 minutes."
    ]},
    { mood: "sad", time: "60", intensity: "advanced", name: "Transformation Hour", description: [
      "HIIT for 20 minutes.",
      "Yoga for 20 minutes.",
      "Meditation for 20 minutes."
    ]},
  
    // NEUTRAL
    { mood: "neutral", time: "15", intensity: "beginner", name: "Balanced Start", description: [
      "March in place for 1 minute.",
      "Do arm circles for 1 minute.",
      "Do light squats for 1 minute.",
      "Repeat the circuit 3 times."
    ]},
    { mood: "neutral", time: "15", intensity: "intermediate", name: "Quick Strength", description: [
      "Do push-ups for 40 seconds.",
      "Rest for 20 seconds.",
      "Do squats for 40 seconds.",
      "Rest for 20 seconds.",
      "Do lunges for 40 seconds.",
      "Rest for 20 seconds.",
      "Repeat the circuit 3 times."
    ]},
    { mood: "neutral", time: "15", intensity: "advanced", name: "Power Up", description: [
      "Do burpees for 45 seconds.",
      "Rest for 15 seconds.",
      "Do mountain climbers for 45 seconds.",
      "Rest for 15 seconds.",
      "Do plank jacks for 45 seconds.",
      "Rest for 15 seconds.",
      "Repeat the circuit 3 times."
    ]},
  
    { mood: "neutral", time: "30", intensity: "beginner", name: "Steady Flow", description: [
      "Walk for 10 minutes.",
      "Do a bodyweight circuit (squats, push-ups, lunges) for 10 minutes.",
      "Stretch for 10 minutes."
    ]},
    { mood: "neutral", time: "30", intensity: "intermediate", name: "Balanced Burn", description: [
      "HIIT for 10 minutes.",
      "Strength training for 10 minutes.",
      "Core exercises for 10 minutes."
    ]},
    { mood: "neutral", time: "30", intensity: "advanced", name: "Challenge Circuit", description: [
      "HIIT for 10 minutes.",
      "Plyometrics for 10 minutes.",
      "Advanced core exercises for 10 minutes."
    ]},
  
    { mood: "neutral", time: "45", intensity: "beginner", name: "All Arounder", description: [
      "Walk for 15 minutes.",
      "Strength exercises (bodyweight) for 15 minutes.",
      "Stretch for 15 minutes."
    ]},
    { mood: "neutral", time: "45", intensity: "intermediate", name: "Total Body", description: [
      "HIIT for 15 minutes.",
      "Strength training for 15 minutes.",
      "Yoga for 15 minutes."
    ]},
    { mood: "neutral", time: "45", intensity: "advanced", name: "Endurance Circuit", description: [
      "HIIT for 15 minutes.",
      "Plyometrics for 15 minutes.",
      "Advanced strength exercises for 15 minutes."
    ]},
  
    { mood: "neutral", time: "60", intensity: "beginner", name: "Balanced Hour", description: [
      "Walk for 20 minutes.",
      "Strength exercises (bodyweight) for 20 minutes.",
      "Yoga for 20 minutes."
    ]},
    { mood: "neutral", time: "60", intensity: "intermediate", name: "Power Hour", description: [
      "HIIT for 20 minutes.",
      "Strength training for 20 minutes.",
      "Yoga for 20 minutes."
    ]},
    { mood: "neutral", time: "60", intensity: "advanced", name: "Ultimate Circuit", description: [
      "HIIT for 20 minutes.",
      "Plyometrics for 20 minutes.",
      "Advanced strength exercises for 20 minutes."
    ]}
  ];

// 2. Button selection logic
function setupSelection(groupSelector, buttonSelector) {
    const group = document.querySelector(groupSelector);
    if (!group) return;
    group.addEventListener('click', function(e) {
        const btn = e.target.closest(buttonSelector);
        if (!btn) return;
        group.querySelectorAll(buttonSelector).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
}

setupSelection('.mood-grid', '.mood-card');
setupSelection('.time', '.time-button');
setupSelection('.intensity', '.intensity-button');

document.querySelector('.workout-button').addEventListener('click', function() {
  const mood = document.querySelector('.mood-card.selected')?.dataset.mood;
  const time = document.querySelector('.time-button.selected')?.dataset.time;
  const intensity = document.querySelector('.intensity-button.selected')?.dataset.intensity;

  if (!mood || !time || !intensity) {
      alert('Please select your mood, time, and intensity!');
      return;
  }

  // Find matching workouts
  const matches = workouts.filter(w =>
      w.mood === mood && w.time === time && w.intensity === intensity
  );

  let result = document.querySelector('.workout-result');
  if (!result) {
      result = document.createElement('div');
      result.className = 'workout-result';
      document.querySelector('.mood-section').appendChild(result);
  }

  if (matches.length === 0) {
      result.innerHTML = "No workouts found for your selection. Try different options!";
      return;
  }

  // Playlist suggestion logic
  const playlists = {
    energetic: {
      name: "Beast Mode",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP?si=hPKXase5TpGR84OpSswCvg"
    },
    tired: {
      name: "Zen Mode",
      url: "https://open.spotify.com/playlist/63aOMpGXakIizfhsXu6p9E?si=de3gw46kRHawgeUkQBY-EQ"
    },
    sad: {
      name: "Good Vibes",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=H_kEKUpYQ2uI5zKWjLfGuQ"
    },
    neutral: {
      name: "Go With The Flow",
      url: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=ju0U64C1Rz-3gfupZwny6g"
    }
  };

  const playlist = playlists[mood];
  let playlistHTML = '';
  if (playlist) {
    playlistHTML = `
      <div class="playlist-suggestion">
        <strong>Suggested Playlist:</strong>
        <a href="${playlist.url}" target="_blank">${playlist.name} <i class="fa-brands fa-spotify"></i></a>
      </div>
    `;
  }

const quotes = [
  "You don’t have to be extreme, just consistent.",
  "Movement is a celebration of what your body can do.",
  "Small steps every day lead to big changes.",
  "Your only limit is your mind.",
  "Progress, not perfection.",
  "You got this!",
  "Every workout counts."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

result.innerHTML = matches.map(w => `
  <div class="workout-card">
    <h4>${w.name}</h4>
    <div class="motivation-quote">${randomQuote}</div>
    <ul>
      ${w.description.map(step => `<li>${step}</li>`).join('')}
    </ul>
    ${playlistHTML}
  </div>
`).join('');
});
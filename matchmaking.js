const users = [
    { name: 'John', class: 'Math', difficulty: '121', studyOption: 'test' },
    { name: 'Alice', class: 'Physics', difficulty: '101', studyOption: 'assignment' },
    { name: 'Bob', class: 'Chemistry', difficulty: '100', studyOption: 'review' },
    { name: 'Alex', class: 'Computer Science', difficulty: 361, studyOption: 'exam' },

];

function findMatchingUser(user) {
    // Compare the user with others and find a match
    for (const otherUser of users) {
        if (compareUsers(user, otherUser)) {
            return otherUser;
        }
    }
    return null;
}

function compareUsers(user1, user2) {
    // Compare user responses for matching
    return (
        user1.class === user2.class &&
        user1.difficulty === user2.difficulty &&
        user1.studyOption === user2.studyOption
    );
}

function findStudyBuddy() {
    const name = document.getElementById('name').value;
    const selectedClass = document.getElementById('class').value;
    const difficulty = document.getElementById('difficulty').value;
    const studyOption = document.getElementById('studyOptions').value;

    if (name && selectedClass && difficulty && studyOption) {
        const user = { name, class: selectedClass, difficulty, studyOption };

        // Compare user with others and find a match
        const match = findMatchingUser(user);

        if (match) {
            const message = `Hello, ${name}! We found a study buddy for you: ${match.name}.`;
            document.getElementById('output').innerText = message;
        } else {
            document.getElementById('output').innerText = "No matching study buddy found.";
        }
    } else {
        alert('Please complete the following.');
    }
}

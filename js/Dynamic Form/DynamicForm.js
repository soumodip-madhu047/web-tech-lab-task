document.addEventListener('DOMContentLoaded', function() {
    const userTypeSelect = document.getElementById('user-type');
    const rollNumberGroup = document.getElementById('roll-number-group');
    const departmentGroup = document.getElementById('department-group');
    const submitBtn = document.getElementById('submit-btn');
    const messageDiv = document.getElementById('message');

    function updateFormFields() {
        const selectedValue = userTypeSelect.value;

        rollNumberGroup.style.display = 'none';
        departmentGroup.style.display = 'none';
 
        document.getElementById('roll-number').value = '';
        document.getElementById('department').value = '';
 
        if (selectedValue === 'student') {
            rollNumberGroup.style.display = 'block';
        } else if (selectedValue === 'teacher') {
            departmentGroup.style.display = 'block';
        }
    }

    function submitForm() {
        const selectedValue = userTypeSelect.value;
        
        if (selectedValue === '') {
            messageDiv.textContent = 'Please select a user type.';
            messageDiv.style.color = '#e74c3c';
            messageDiv.style.backgroundColor = '#ffebee';
            return;
        }
        
        let userData = {
            userType: selectedValue
        };
        
        if (selectedValue === 'student') {
            const rollNumber = document.getElementById('roll-number').value;
            if (!rollNumber) {
                messageDiv.textContent = 'Please enter your roll number.';
                messageDiv.style.color = '#e74c3c';
                messageDiv.style.backgroundColor = '#ffebee';
                return;
            }
            userData.rollNumber = rollNumber;
            messageDiv.textContent = `Student registration successful! Roll Number: ${rollNumber}`;
        } else if (selectedValue === 'teacher') {
            const department = document.getElementById('department').value;
            if (!department) {
                messageDiv.textContent = 'Please enter your department.';
                messageDiv.style.color = '#e74c3c';
                messageDiv.style.backgroundColor = '#ffebee';
                return;
            }
            userData.department = department;
            messageDiv.textContent = `Teacher registration successful! Department: ${department}`;
        }
        
        messageDiv.style.color = '#27ae60';
        messageDiv.style.backgroundColor = '#e8f5e9';
        
        console.log('Form submitted with data:', userData);
    }
    userTypeSelect.addEventListener('change', updateFormFields);
    submitBtn.addEventListener('click', submitForm);
});
document.addEventListener('DOMContentLoaded', function() {

    const nameInput = document.getElementById('name');
    const rollInput = document.getElementById('roll');
    const departmentInput = document.getElementById('department');
    const addBtn = document.getElementById('add-btn');
    const tableBody = document.getElementById('table-body');
    const errorMsg = document.getElementById('error-msg');
    const noDataMsg = document.getElementById('no-data');

    
    function validateInputs() {
        const name = nameInput.value.trim();
        const roll = rollInput.value.trim();
        const department = departmentInput.value.trim();
        
        if (name === '' || roll === '' || department === '') {
            errorMsg.textContent = 'Please fill in all fields';
            return false;
        }
        
        errorMsg.textContent = '';
        return true;
    }

  
    function addStudent() {
        if (!validateInputs()) {
            return;
        }
        
        
        const name = nameInput.value.trim();
        const roll = rollInput.value.trim();
        const department = departmentInput.value.trim();
        
      
        const newRow = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        
        const rollCell = document.createElement('td');
        rollCell.textContent = roll;
        
        const deptCell = document.createElement('td');
        deptCell.textContent = department;
        
        const actionCell = document.createElement('td');
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        
        deleteBtn.addEventListener('click', function() {
            newRow.remove();
            updateNoDataMessage();
        });
        
        actionCell.appendChild(deleteBtn);

        newRow.appendChild(nameCell);
        newRow.appendChild(rollCell);
        newRow.appendChild(deptCell);
        newRow.appendChild(actionCell);

        tableBody.appendChild(newRow);

        nameInput.value = '';
        rollInput.value = '';
        departmentInput.value = '';

        updateNoDataMessage();
    }

    function updateNoDataMessage() {
        if (tableBody.children.length === 0) {
            noDataMsg.style.display = 'block';
        } else {
            noDataMsg.style.display = 'none';
        }
    }

    addBtn.addEventListener('click', addStudent);

    updateNoDataMessage();
});
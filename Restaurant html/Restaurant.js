// Restaurant.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to show the active tab and hide the inactive one
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.tab-content');
        const buttons = document.querySelectorAll('.tab-button');

        tabs.forEach(tab => {
            if (tab.id === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        buttons.forEach(button => {
            if (button.getAttribute('onclick').includes(tabId)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Set up event listeners for the tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('onclick').split("'")[1];
            showTab(tabId);
        });
    });
});

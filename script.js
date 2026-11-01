document.getElementById('unionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form ergamee akka milkaa'e agarsiisuuf
    document.getElementById('unionForm').style.display = 'none';
    document.getElementById('successMessage').classList.remove('hidden');
});
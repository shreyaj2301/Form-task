function handleCheckIn() {
    const apexId = document.getElementById("apexId").value;
    if (apexId.trim() === "") {
      alert("Please enter your APEX ID");
      return;
    }
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("apexId").value = "";
  }
  
menu_list_array = [
    "Veg Margherita Pizza",
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];
// Function to display the menu
function getmenu() {
    var htmldata = "";
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>';
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}

// Function to add a pizza suggestion
function add_suggestion() {
    var item = document.getElementById("add_item").value;
    if (item.trim() !== "") {
        menu_list_array.push(item);
        document.getElementById("add_item").value = ""; // Clear the input field
        getmenu(); // Update the menu display immediately
    } else {
        alert("Please enter a valid pizza name.");
    }
}

// Function for creating global header and insert it dynamically
function createHeader() {
    const header = document.getElementById('global-header');
    header.innerHTML = `
    <div  id="content-container" ><h1>Retro</h1><h1>Snap</h1></div>
    <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="products.html" class="nav-link">Products</a>
        <a href="contact.html" class="nav-link">Contact</a>
    </nav>
    `;
}

// Function for creating and adding global footer dynamically
function createFooter() {
    const footer = document.getElementById('global-footer');
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} RetroSnap. All rights reserved.</p>
    `;
}

// Adding global header and footer dynamically in webpage on page load
window.onload = function() {
    createHeader();
    createFooter();
};

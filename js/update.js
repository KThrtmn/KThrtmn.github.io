const lastMod = document.lastModified;
document.getElementById('lastupdate').textContent = new Date(lastMod).toLocaleString();

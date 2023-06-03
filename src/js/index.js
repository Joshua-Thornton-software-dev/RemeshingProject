
const STL_IMPORT_ID = "stlInput-import";
const STAGE_URL = "https://r1uzd4ndx5.execute-api.us-east-2.amazonaws.com/dev";
const REMESH_URL = STAGE_URL + "/getnurbs";

let stl_raw = null;
let stl_smoothed = null;
let stlInput = null;
let fileNameP = null;
let badFileSection = null;
let nurbsImg = null;

window.onload = () => {
    // Set up the hidden file input.
    stlInput = document.createElement('input');
    stlInput.id = STL_IMPORT_ID;
    stlInput.type = 'file';
    stlInput.accept = ".stl";
    stlInput.style = "display: none;";
    stlInput.onchange = e => {
        importChanged(e);
    };
    document.getElementById("inputContainer").appendChild(stlInput);

    // Set up other references.
    fileNameP = document.getElementById("fileName");
    badFileSection = document.getElementById("badFileSection");
    nurbsImg = document.getElementById("nurbsImg");
}

// Imports an stil file from the client's file system.
function importSTL() {
    stlInput.click();
}

function importChanged(e) {
    let selectedFile = stlInput.files[0];
    //console.debug(selectedFile);
    fileNameP.innerText = selectedFile.name;

    if (!selectedFile.name.toLowerCase().endsWith(".stl")) {
        badFileSection.style.display = "block";
        return;
    }
    badFileSection.style.display = "none";
    getNURBsFromSTL(selectedFile);
}

function getNURBsFromSTL(stlFile) {
    $.ajax({
        type: "POST",
        url: REMESH_URL,
        headers: {},
        data : JSON.stringify({
            "stlFile": "empty"
        }),
        success: function(res) {
            alert("success!");
        },
        error: function(error) {
            alert("error: " + JSON.stringify(error));
        }
    })
}

function extractMesh(stlFile) {
    let mesh = null;

    smoothM

    return mesh;
}

function smoothMesh(mesh) {


    return mesh
}

function getOutline(mesh) {
    let outline = null;


    return outline;
}

function smoothOutline(outline) {


    return outline;
}

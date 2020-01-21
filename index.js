//Create Graph Class
class Graph{
    //defining vertex array and adjacent list
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
//G = (V,E)
//add Vertex to the graph
    addVertex(v){
        //intialize the adjacent list with a null array
        this.AdjList.set(v, []);
    }
//Add edge to the graph
    addEdge(v,w){
        //get the list for the vertex v and put the vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
        //Since the graph is indirected, add an edge from w to v also (direccional)
        this.AdjList.get(w).push(v);
    }
//Print the vertex and ADJACENCY LIST
    printGraph(){
        //get all the vertex
        var get_keys = this.AdjList.keys();
        //[{"A",[{"A","B"},{"A","C"}]}, {"B",[{"B","A"}]}, {"C",[{"C","A"}]}, {"D",[]}, {"E",[]}, {"F",[]}]
        //["A","B",...]
        //iterate over the vertex
        for(var i of get_keys){
            //get the corresponding, adjacency list for the vertex
            var get_values = this.AdjList.get(i);
            //Primera Iteración var get_values = this.AdjList.get("A");
            //Segunda Iteración var get_values = this.AdjList.get("B");
            var conc = "";
            //iterating over the adjacency list concetenate the values into a string
            for(var j of get_values) conc +=j + " ";
            //print tthe vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
}
//Using the above implemented graph class
var g = new Graph(10);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I' ];
//adding vertices
for(var i = 0; i< vertices.length; i++){
    g.addVertex(vertices[i]);
}
//adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('G', 'A');
g.addEdge('B', 'E');
g.addEdge('I', 'B');
g.addEdge('C', 'B');
g.addEdge('E', 'G');
g.addEdge('H', 'E');
g.addEdge('I', 'C');
g.addEdge('C','F');
g.printGraph();
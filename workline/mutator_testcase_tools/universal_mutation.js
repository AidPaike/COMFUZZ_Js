
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
//Introduce commander
const commander = require("commander");

const fs = require("fs");

let filename = '';


commander
    .option('-f, --filename <type>', 'Set filename to execute')

commander.parse();
const options = commander.opts();
//console.log(options.filename);

if (options.filename)
    filename = options.filename;
/**
 *
 * @param {type} filename
 * @param {type} callback
 * @returns {undefined}
 */
var readFromFile = function (filename, callback) {
    var code = fs.readFile(filename, 'utf-8', function (err, data) {
        if (err){
            console.log('NISL ERROR OCCURED: ' + err);
            console.log("----------");
        }
        else {
            callback(data.toString());
        }
    });
};


var random_block_remove = function(source) {
    var ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    estraverse.traverse(ast, {
        enter: function (node, parent) {

            if(node.type == "VariableDeclarator" && node.id.name.includes("NISLFuzzingFunc")){

                for(let i = 0; i < node.init.body.body.length; i++){
                    random_block_index = Math.floor(Math.random() * node.init.body.body.length);
                    if(node.init.body.body[random_block_index].type != "VariableDeclaration"){break;}
                }

                node.init.body.body.splice(random_block_index, 1);
            }
        },
    });
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("random_block_remove");
       console.log("------------------------------");
   }
};


var while_if_swap = function(source) {
    var ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    let flag = 0;
    estraverse.traverse(ast, {
        enter: function (node){

            //if(node.type == "IfStatement" && node.alternate == undefined){
            if(node.type == "IfStatement"){
                flag = 1;

                node.type = "WhileStatement";

                delete node.alternate;

                node.body = node.consequent;
                delete node.consequent;
            }

            if(node.type == "WhileStatement" && flag == 0){

                node.type = "IfStatement";

                node.consequent = node.body;
                delete node.body;

                node.alternate = undefined;
            }
        },
    });
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("while_if_swap");
       console.log("------------------------------");
   }
};



var condition_code_add = function(source) {
    let while_code = "while(True){}";
    let if_code = "if(True){}";
    let while_ast = esprima.parse(while_code);
    let if_ast = esprima.parse(if_code);
    estraverse.traverse(while_ast, {
        enter: function (node) {
            if(node.type == "WhileStatement"){
                    while_node = node;
                }
        },
    });
    estraverse.traverse(if_ast, {
        enter: function (node) {
            if(node.type == "IfStatement"){
                    if_node = node;
                }
        },
    });
    var ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    estraverse.traverse(ast, {
        enter: function (node) {

            if(node.type == "VariableDeclarator" && node.id.name.includes("NISLFuzzingFunc")){

                for(let i = 0; i < node.init.body.body.length; i++){
                    random_block_index = Math.floor(Math.random() * node.init.body.body.length);
                    if(node.init.body.body[random_block_index].type != "VariableDeclaration"){break;}
                }

                let node_copy = node.init.body.body[random_block_index];

                let node_arr = [while_node, if_node];
                node.init.body.body[random_block_index] = node_arr[Math.floor(Math.random() * node_arr.length)];

                node.init.body.body[random_block_index].test.name = Boolean(Math.round(Math.random()));

                if(node.init.body.body[random_block_index].type == "WhileStatement"){
                    node.init.body.body[random_block_index].body.body[0] = node_copy;
                }else{
                    node.init.body.body[random_block_index].consequent.body[0] = node_copy;
                }
                // console.log(node);
            }
        },
    });
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("condition_code_add");
       console.log("------------------------------");
   }
};


var replaceOperator = function(source) {
    var BinaryExpression = ["+", "-", "*", "/", "%", "==", "===", "!=", "!==", ">", "<", ">=", "<="];
    var UpdateExpression = ["++", "--"];
    var LogicalExpression = ["&&", "||"];
    let flag = 0;
    var ast = esprima.parse(source);
    for(var i = 0; i<5 ; i++ ){
        estraverse.traverse(ast, {
            enter: function (node) {
                if(node.type == 'BinaryExpression'){
                    flag = 1;
                    node.operator = BinaryExpression[Math.floor(Math.random() * BinaryExpression.length)];
                }
                if(node.type == 'UpdateExpression'){
                    flag = 1;
                    node.operator = UpdateExpression[Math.floor(Math.random() * UpdateExpression.length)];
                }
                if(node.type == 'LogicalExpression'){
                    flag = 1;
                    node.operator = LogicalExpression[Math.floor(Math.random() * LogicalExpression.length)];
                }
            },
            leave: function (node, parent) {}
        });
        if(flag == 1) {
            codegen = escodegen.generate(ast);
            console.log(codegen);
            console.log("replaceOperator");
            console.log("------------------------------");
        }
    }
};



readFromFile(filename, random_block_remove);
readFromFile(filename, while_if_swap);
readFromFile(filename, condition_code_add);
readFromFile(filename, replaceOperator);
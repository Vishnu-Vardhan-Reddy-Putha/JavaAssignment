// 1. Create a Buffer of size 256 bytes
let buffer = Buffer.alloc(256);

// 2. Write student data to buffer as JSON string
let student1 = {
    id: 1,
    name: "Thananya",
    age: 20,
    grade: "A"
};

let student1Str = JSON.stringify(student1);
let bytesWritten = buffer.write(student1Str);
console.log(`Bytes written to buffer: ${bytesWritten}`);

// 3. Read data back from buffer
let bufferStr = buffer.toString('utf8', 0, bytesWritten);
console.log("Buffer content as string:", bufferStr);

let parsedStudent = JSON.parse(bufferStr);
console.log("Parsed Student Data:");
console.log("ID:", parsedStudent.id);
console.log("Name:", parsedStudent.name);
console.log("Age:", parsedStudent.age);
console.log("Grade:", parsedStudent.grade);

// 4. Buffer Operations

// Appending another student if space permits
let student2 = {
    id: 2,
    name: "Alex",
    age: 21,
    grade: "B"
};
let student2Str = JSON.stringify(student2);

// Check if enough space in buffer
if (bytesWritten + Buffer.byteLength(student2Str) <= buffer.length) {
    buffer.write(student2Str, bytesWritten);
    console.log("\nAppended second student.");
} else {
    console.log("\nNot enough space to append second student.");
}

// Slice buffer to get only first student's data
let slicedBuffer = buffer.slice(0, bytesWritten);
console.log("Sliced buffer contains:", slicedBuffer.toString());

// Copy buffer to another
let copiedBuffer = Buffer.alloc(buffer.length);
buffer.copy(copiedBuffer);
console.log("Copied buffer content:", copiedBuffer.toString('utf8', 0, bytesWritten));

// 5. Encoding & Decoding
let base64Encoded = buffer.toString('base64', 0, bytesWritten);
console.log("\nBuffer content in base64:");
console.log(base64Encoded);

function solution(course, inquiries) {
    
   class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
  }
}

class BinaryTree {
  constructor(course) {
    this.course = course;
    this.root = new TreeNode(course[0]);
    let currentNode = this.root;
    for (let i = 1; i < course.length; i++) {
      currentNode.left = new TreeNode(course[i]);
      currentNode = currentNode.left;
    }
  }

  validSequence(inquiries) {
    let currentNode = this.root;

    for (let inquiry of inquiries) {
      if (inquiry === currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        }
      } else {
        return false;
      }
    }

    return true;
  }
}
    const binaryTree = new BinaryTree(course);

    const courseOnlyInquiries = inquiries.map((el) =>
    el
      .split("")
      .filter((x) => course.includes(x))
      .join("")
  );
    return courseOnlyInquiries.map((inquiry) =>
    binaryTree.validSequence(inquiry) ? 1 : 0
  ).reduce((acc, cur) => acc + cur, 0);
    
}
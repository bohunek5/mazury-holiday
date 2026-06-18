export const parseDescription = (desc: string) => {
    return desc.split('\n').map(line => {
        const match = line.match(/^([^:]+):\s*(.*)$/);
        if (match) {
            console.log("KEY:", match[1], "VALUE:", match[2]);
        } else {
            console.log("TEXT:", line);
        }
    });
};

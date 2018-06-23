module.exports = (socket, store) => {
    socket.on('setInitiative', (data) => {
        if (data.entries) {
            const initiativeEntries = data.entries.map(entry => {
                return {
                    id: entry.id || 'Unknown',
                    score: entry.score || 0
                }
            }).sort((a, b) => a.score > b.score);

            store = {
                ...store,
                currentTurn: 0,
                entries: initiativeEntries
            };

            socket.broadcast.emit('initiativeUpdated', initiativeEntries);
        }
    });
};
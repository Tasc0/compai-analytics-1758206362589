// CompAI Dashboard JavaScript
let dataPoints = 1234;
let analysisRunning = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    updateLastUpdated();
    initializeChart();
    
    // Simulate real-time data updates
    setInterval(updateMetrics, 5000);
});

function updateLastUpdated() {
    const now = new Date();
    document.getElementById('lastUpdate').textContent = now.toLocaleString();
}

function refreshData() {
    if (analysisRunning) return;
    
    const btn = event.target;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
    
    setTimeout(() => {
        dataPoints += Math.floor(Math.random() * 100) + 50;
        document.getElementById('dataPoints').textContent = dataPoints.toLocaleString();
        
        btn.disabled = false;
        btn.innerHTML = 'Refresh Data';
        
        showNotification('Data refreshed successfully!', 'success');
    }, 2000);
}

function generateInsights() {
    const insights = [
        'Performance trending upward by ' + (Math.floor(Math.random() * 20) + 10) + '%',
        'Optimal efficiency detected in Sector ' + String.fromCharCode(65 + Math.floor(Math.random() * 5)),
        'Projected growth: ' + (Math.floor(Math.random() * 30) + 15) + '% next quarter',
        'Anomaly detection: 99.9% accuracy rate',
        'Resource utilization optimized by ' + (Math.floor(Math.random() * 25) + 12) + '%',
        'Customer satisfaction improved by ' + (Math.floor(Math.random() * 15) + 8) + '%'
    ];
    
    const container = document.querySelector('.insights-container');
    const randomInsights = insights.sort(() => Math.random() - 0.5).slice(0, 3);
    
    container.innerHTML = '';
    randomInsights.forEach(insight => {
        const div = document.createElement('div');
        div.className = 'insight';
        div.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <span>${insight}</span>
        `;
        container.appendChild(div);
    });
    
    showNotification('New insights generated!', 'info');
}

function updateChart() {
    const canvas = document.getElementById('dataChart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw simple bar chart
    const data = Array.from({length: 7}, () => Math.floor(Math.random() * 180) + 20);
    const barWidth = canvas.width / data.length;
    
    ctx.fillStyle = '#667eea';
    data.forEach((value, index) => {
        const barHeight = (value / 200) * canvas.height;
        const x = index * barWidth;
        const y = canvas.height - barHeight;
        
        ctx.fillRect(x + 10, y, barWidth - 20, barHeight);
        
        // Add value labels
        ctx.fillStyle = '#4a5568';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth/2, y - 5);
        ctx.fillStyle = '#667eea';
    });
    
    showNotification('Chart updated!', 'success');
}

function initializeChart() {
    updateChart();
}

function updateMetrics() {
    // Simulate real-time metric updates
    const variation = Math.floor(Math.random() * 20) - 10;
    dataPoints += variation;
    if (dataPoints < 0) dataPoints = 0;
    
    document.getElementById('dataPoints').textContent = dataPoints.toLocaleString();
}

function exportData() {
    const data = {
        timestamp: new Date().toISOString(),
        dataPoints: dataPoints,
        status: 'healthy',
        performance: Math.floor(Math.random() * 100) + '%'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'compai-data-export.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

function runAnalysis() {
    if (analysisRunning) {
        showNotification('Analysis already running!', 'warning');
        return;
    }
    
    analysisRunning = true;
    const btn = event.target;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running Analysis...';
    btn.disabled = true;
    
    setTimeout(() => {
        analysisRunning = false;
        btn.innerHTML = '<i class="fas fa-play"></i> Run Analysis';
        btn.disabled = false;
        
        showNotification('Analysis completed successfully!', 'success');
        generateInsights();
        updateChart();
    }, 4000);
}

function scheduleReport() {
    const now = new Date();
    const scheduled = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Tomorrow
    
    showNotification(`Report scheduled for ${scheduled.toLocaleDateString()} at ${scheduled.toLocaleTimeString()}`, 'info');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        max-width: 300px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const colors = {
        success: '#38a169',
        error: '#e53e3e',
        warning: '#d69e2e',
        info: '#3182ce'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => notification.style.opacity = '1', 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}
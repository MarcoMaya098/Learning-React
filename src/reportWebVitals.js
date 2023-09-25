const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    const entries = [];
    const observer = new PerformanceObserver((list) => {
      entries.push(...list.getEntries());
    });
    observer.observe({ type: 'web-vitals' });
    window.addEventListener('load', () => {
      const metrics = {
        entries,
        getCLS: () => getMetric('layout-shift', entries),
        getFID: () => getMetric('first-input-delay', entries),
        getFCP: () => getMetric('paint', entries, 'first-contentful-paint'),
        getLCP: () => getMetric('paint', entries, 'largest-contentful-paint'),
        getTTFB: () => getMetric('navigation', entries, 'responseStart'),
      };
      onPerfEntry(metrics);
    });
  }
};

const getMetric = (name, entries, alias) => {
  const entry = entries.find((entry) => entry.name === (alias || name));
  if (entry) {
    // Round to two decimal places
    return Math.round(entry.startTime + entry.duration * 100) / 100;
  } else {
    return null;
  }
};

export default reportWebVitals;

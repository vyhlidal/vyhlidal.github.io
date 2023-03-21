document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for input fields and the calculate button
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateResults);
  });
  
  function calculateResults() {
    // Get values from input fields
    const leadsGenerated = parseFloat(document.getElementById('leadsGenerated').value);
    const conversionRate = parseFloat(document.getElementById('conversionRate').value) / 100;
    const retainedCustomers = parseFloat(document.getElementById('retainedCustomers').value);
    const revenuePerCustomer = parseFloat(document.getElementById('revenuePerCustomer').value);
    const grossMargin = parseFloat(document.getElementById('grossMargin').value) / 100;
    const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);
    const improvementLeads = 1 + parseFloat(document.getElementById('improvementLeads').value) / 100;
    const improvementConversion = 1 + parseFloat(document.getElementById('improvementConversion').value) / 100;
    const improvementRetention = 1 + parseFloat(document.getElementById('improvementRetention').value) / 100;
    const improvementRevenue = 1 + parseFloat(document.getElementById('improvementRevenue').value) / 100;
    const improvementMargin = 1 + parseFloat(document.getElementById('improvementMargin').value) / 100;
    const improvementCosts = 1 + parseFloat(document.getElementById('improvementCosts').value) / 100;
  
    // Perform calculations for the current scenario
    const newCustomersCurrent = calculateNewCustomers(leadsGenerated, conversionRate);
    const totalCustomersCurrent = calculateTotalCustomers(newCustomersCurrent, retainedCustomers);
    const revenueCurrent = calculateRevenue(totalCustomersCurrent, revenuePerCustomer);
    const grossProfitCurrent = calculateGrossProfit(revenueCurrent, grossMargin);
    const netProfitCurrent = calculateNetProfit(grossProfitCurrent, fixedCosts);
  
    // Perform calculations for the improved scenario
    const leadsGeneratedImproved = leadsGenerated * improvementLeads;
    const conversionRateImproved = conversionRate * improvementConversion;
    const newCustomersImproved = calculateNewCustomers(leadsGeneratedImproved, conversionRateImproved);
    const retainedCustomersImproved = retainedCustomers * improvementRetention;
    const totalCustomersImproved = calculateTotalCustomers(newCustomersImproved, retainedCustomersImproved);
    const revenuePerCustomerImproved = revenuePerCustomer * improvementRevenue;
    const revenueImproved = calculateRevenue(totalCustomersImproved, revenuePerCustomerImproved);
    const grossMarginImproved = grossMargin * improvementMargin;
    const grossProfitImproved = calculateGrossProfit(revenueImproved, grossMarginImproved);
    const fixedCostsImproved = fixedCosts * improvementCosts;
    const netProfitImproved = calculateNetProfit(grossProfitImproved, fixedCostsImproved);
  
    // Update the results in the results section
    updateTableResults([
      leadsGenerated, conversionRate, newCustomersCurrent, retainedCustomers, totalCustomersCurrent, revenuePerCustomer, revenueCurrent, grossMargin, grossProfitCurrent, fixedCosts, netProfitCurrent,
      leadsGeneratedImproved, conversionRateImproved, newCustomersImproved, retainedCustomersImproved, totalCustomersImproved, revenuePerCustomerImproved, revenueImproved, grossMarginImproved, grossProfitImproved, fixedCostsImproved, netProfitImproved
    ]);
  
    // Generate the chart to visualize the impacts
    generateChart({
      current: [leadsGenerated, conversionRate, newCustomersCurrent, retainedCustomers, totalCustomersCurrent, revenuePerCustomer, revenueCurrent, grossMargin, grossProfitCurrent, fixedCosts, netProfitCurrent],
      improved: [leadsGeneratedImproved, conversionRateImproved, newCustomersImproved, retainedCustomersImproved, totalCustomersImproved, revenuePerCustomerImproved, revenueImproved, grossMarginImproved, grossProfitImproved, fixedCostsImproved, netProfitImproved]
    });
  }
  
  function calculateNewCustomers(leadsGenerated, conversionRate) {
    return leadsGenerated * conversionRate;
  }
  
  function calculateTotalCustomers(newCustomers, retainedCustomers) {
    return newCustomers + retainedCustomers;
  }
  
  function calculateRevenue(totalCustomers, revenuePerCustomer) {
    return totalCustomers * revenuePerCustomer;
  }
  
  function calculateGrossProfit(revenue, grossMargin) {
    return revenue * grossMargin;
  }
  
  function calculateNetProfit(grossProfit, fixedCosts) {
    return grossProfit - fixedCosts;
  }
  
  function updateTableResults(results) {
    // Update the results in the results section
    document.getElementById('leadsGeneratedCurrent').textContent = results[0].toFixed(2);
    document.getElementById('conversionRateCurrent').textContent = (results[1] * 100).toFixed(2) + '%';
    // Add more lines to update the other table data cells with the calculated results
  
    document.getElementById('leadsGeneratedImproved').textContent = results[12].toFixed(2);
    document.getElementById('conversionRateImproved').textContent = (results[13] * 100).toFixed(2) + '%';
    // Add more lines to update the other table data cells with the calculated results
  }
  
    `;
  }
  
  function generateChart(data) {
    // Generate the chart to visualize the impacts
    const ctx = document.getElementById('impactChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Leads Generated', 'Conversion Rate', 'New Customers', 'Retained Customers', 'Total Customers', 'Revenue Per Customer', 'Revenue', 'Gross Margin', 'Gross Profit', 'Fixed Costs', 'Net Profit'],
        datasets: [
          {
            label: 'Current',
            data: data.current,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Improved',
            data: data.improved,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  
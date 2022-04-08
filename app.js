let friends = [ "Mikaylah", "Mylz", "Ephraim", "Lydia", "Najee" ]

for (let i = 0; i < friends.length; i++) {
  for (let num = 99; num > 0; num--) {
      
  
    if (num > 2) {
        console.log (num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[i] + 
            ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file')
    } else if (num === 2){ console.log(num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[i] + 
    ' strikes one out, clears it all out, ' + (num - 1) + ' line of code in the file')
    } else { console.log (num + ' line of code in the file, ' + num + ' line of code; ' + friends[i] + 
    ' strikes one out, clears it all out, no more lines of code in the file')
        
    }


    }

} 
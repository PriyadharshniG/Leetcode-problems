The solution leverages a HashMap to achieve an efficient lookup of elements and their indices. This ensures a time complexity of 

O(n).

Detailed Steps
Import the necessary class:

HashMap from java.util is used.
Initialize a HashMap:

A HashMap<Integer, Integer> named map is created to store the elements of nums as keys and their corresponding indices as values.
First Pass (Storing Elements):

Iterate through the nums array and store each element and its index in the map.
Second Pass (Finding the Pair):

Iterate through the nums array again. For each element nums[i], calculate the difference target - nums[i].
Check if the difference exists as a key in the map and ensure that the index of the difference is not the same as the current index i.
If both conditions are satisfied, return the indices as an array.
Return Statement:

If no valid pair is found, return an empty array.

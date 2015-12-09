##Conductor
1. **Login**
  * Authenticate
  * Display Screen
2. **Select Route**
  * Display Route Options
3. **Select Trip** *[Scheduled time]*
  * Display Trip options (may be clipped using current time)
4. **Populate Wallet/Balance Sheet**
  * Add initial Amount
  * Initialize Passenger Count = 0
5. **Status** 
  * Update Start time. *Useful for frequent travellers [Bus could be delayed]*
  * Update Breakdown.
6. **Continuously Issue Ticket** *[For fast process, map num-pad keys to stops/stages. Note PMPL charge stage wise and not stop-wise]*
  * Populate start [shortcut key based on route: stop1, stop2, or stage1, stage2 etc.]
  * Populate end [shortcut key based on route: stop1, stop2, or stage1, stage2 etc.]
  * Populate Amount
  * Populate Location [optional, background]
  * Issue ticket
  * Notify server @ seat occupied duration
  * Notify server @ current bus location
  * Update Wallet, Balance sheet
  * Print ticket for non-smart passenger
7. **Continuously update bus location**
  * Incase no passenger entry for particular duration [e.g. 1min, 500mtr etc.] Push location to server.

##Passenger
1. **Login**
  * Authenticate
  * Display Screen
2. **Plan Journey**
  * Populate Recent Journeys
  * Populate Favorite Journeys
  * Option to start New.
3. **Select Start Stop**
  * Get nearest stops based on Location [markers and distances].
  * User selects stop as per convenience.
4. **Select End Stop**
  * Enter Google search keyword.
  * Send location to server and get nearby stops. [Markers and distances]
  * User selects stop as per convenience.
5. **Routes and Trips**
  * Populate available Routes.
  * Populate available trips clipped to the current time.
  * Populate approx. arrival time to the start stop.
  * Populate seat availability. [Note Buses have both seating and standing capacity. 20/30 seats, or if seats are full, standing availability 10*/40*]
  * User selects Route and trip as per convenience.
6. **Buy Ticket**
  * All fields in ticket form are filled.
  * Amount (Wallet Balance) is displayed.
  * Enable buy button only if the passenger and conductor are in vicinity (10mtr, max-bus size)???
  * On Buy, 
	1. Send data to Server. [Or Open direct communication channel with conductor]
	2. Server sends data to conductor.
	3. Conductor app will authenticate in background (optionally notify conductor or wait for acceptance), 
	4. Update Wallet, Balance sheet.
	5. Notify server @ seat occupied duration
	6. Notify server @ current bus location
	7. Notify server @ ticket number to send to passenger.
	8. On valid ticket number received, passenger app will generate ticket image, and saves.

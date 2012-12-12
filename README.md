buster-istanbul-demo
====================

buster-istanbul demo project structure

```bash
git clone https://github.com/kates/buster-istanbul-demo.git
cd buster-istanbul-demo
npm install
buster test
```

You'll get the output:

	Demo: ..
	1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
	Finished in 0.007s
	----------------+-----------+-----------+-----------+-----------+
	File            |   % Stmts |% Branches |   % Funcs |   % Lines |
	----------------+-----------+-----------+-----------+-----------+
	   src/         |     83.33 |       100 |     66.67 |     83.33 |
	      demo.js   |       100 |       100 |       100 |       100 |
	      helper.js |        50 |       100 |         0 |        50 |
	----------------+-----------+-----------+-----------+-----------+
	All files       |     83.33 |       100 |     66.67 |     83.33 |
	----------------+-----------+-----------+-----------+-----------+


	=============================== Coverage summary ===============================
	Statements   : 83.33% ( 5/6 )
	Branches     : 100% ( 0/0 )
	Functions    : 66.67% ( 2/3 )
	Lines        : 83.33% ( 5/6 )
	================================================================================

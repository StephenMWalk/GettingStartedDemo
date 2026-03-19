var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "regionsbetweencurvespart01",
  "level": "1",
  "url": "regionsbetweencurvespart01.html",
  "type": "Section",
  "number": "",
  "title": "Calculus II handout: \"Some Calculus II problems\" (Regions between curves)--a start",
  "body": " Calculus II handout: \"Some Calculus II problems\" (Regions between curves)--a start    Find the area of the finite region between the graphs of and .   The region described in Example 1.   The graph of the quadratic function is a red parabola that opens downward and is symmetric across the y-axis, and the graph of the linear function is a blue line of slope 1 that intersects the parabola near the point negative 4 comma 0 and also near the point 3 comma 7. The region between the graphs is shaded light-blue in the diagram.      We check for intersection points: Then and are the solutions to the equation and, hence, the -coordinates of the intersection points of the graphs.  The area is then given by     "
},
{
  "id": "regionsbetweencurvespart01-2",
  "level": "2",
  "url": "regionsbetweencurvespart01.html#regionsbetweencurvespart01-2",
  "type": "Example",
  "number": "1",
  "title": "",
  "body": "  Find the area of the finite region between the graphs of and .   The region described in Example 1.   The graph of the quadratic function is a red parabola that opens downward and is symmetric across the y-axis, and the graph of the linear function is a blue line of slope 1 that intersects the parabola near the point negative 4 comma 0 and also near the point 3 comma 7. The region between the graphs is shaded light-blue in the diagram.      We check for intersection points: Then and are the solutions to the equation and, hence, the -coordinates of the intersection points of the graphs.  The area is then given by    "
},
{
  "id": "paramexperimentation",
  "level": "1",
  "url": "paramexperimentation.html",
  "type": "Section",
  "number": "",
  "title": "Calculus II handout: \"Parametrization Experimentation\" (Basic concepts of parametrization)--a start",
  "body": " Calculus II handout: \"Parametrization Experimentation\" (Basic concepts of parametrization)--a start  For this exploration, some semesters, I've taken the class to a computer lab and had them use Maple worksheets to explore various parametrizations.  For instance, the worksheet titled \"Part A\" has a number of command lines for parametrizations involving sines and cosines. (The syntax for this in Maple has the form \"[ x(t), y(t), range of t-values ]\" inside the plot command.)  For each item below, we would use Maple to illustrate the parametrization; then we would include a very basic sketch of the parametrized curve. You're not using Maple, but you can carry out those tasks. Also indicate the starting point (corresponding to ) and the direction in which the curve is traced out. (Maple does not explicitly show us the direction in which the curve was traced out, but we can ferret out that information either by drawing on our knowledge of trigonometry or by experimenting with the range of -values so that we see the first quarter of the curve, the first half of the curve, and so on.)   :  The curve is the unit circle (\"unit\" meaning \"radius 1\") centered at the origin. The starting point is on the right (the point ). The circle is traced out counterclockwise.   "
},
{
  "id": "paramexperimentation-5",
  "level": "2",
  "url": "paramexperimentation.html#paramexperimentation-5",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": " :  The curve is the unit circle (\"unit\" meaning \"radius 1\") centered at the origin. The starting point is on the right (the point ). The circle is traced out counterclockwise.  "
},
{
  "id": "trigsub",
  "level": "1",
  "url": "trigsub.html",
  "type": "Section",
  "number": "",
  "title": "Calculus II handout: Trigonometric substitution",
  "body": " Calculus II handout: Trigonometric substitution   (This was really Example 1 from the class notes. The markup language I'm using, \"PreTeXt,\" imposes rules about how things are supposed to be numbered.) Evaluate .   (The following was written in red on the class notes, which is the color that signifies we are working with respect to .)  (And this was blue in the class notes --a side note that was added after we antidifferentiated the -term and immediately before we drew the right-triangle diagram.) NOTE that the \"Let\" statement is actually saying \"Let be .\" And recall that this means that   AND (either or ).    (Back to red ink now, where the markup language will allow it.) The integral becomes   Note that because of the restrictions on , must be nonnegative, so that . That was used in the above calculations to replace \" \" with \" .\"  To figure out how to put the antiderivative back into -language, we use a right-triangle diagram:   A right-triangle diagram needed to finish Example 1.   Reference triangles in Quadrants One and Three are labeled so that the secant of the angle theta is x-over-5.  Reference triangles for angle theta lie in Quadrants One and Three. In Quadrant One, the hypotenuse has been labeled as x, the horizontal leg has been labeled as 5, and the resulting value for the vertical leg is the square root of (x-squared minus 25). In Quadrant Three, the hypotenuse has been labeled as negative-x, the horizontal leg has been labeled as negative-5, and the resulting value for the vertical leg is negative-one times the square root of (x-squared minus 25).    Now we can finish up by putting the antiderivative formula back into -language. We rejoin the calculations above, already in progress:  (We start out in red ink for the \" -language\" and will switch for the final step when we translate back to \" -language.\") The integral is   A subtle point: If you saw this problem in a textbook and looked up the answer in the back of the book, you might see the answer listed as . And that's not what we obtained! Were we wrong? Would that book be wrong? Neither. Using our algebra and logarithm-law skills, we note that our answer can be rewritten: We have where is a new name for . Do you see what we did there? That was the arbitrary constant mashup !     (This was really Example 2 from the class notes.) Evaluate .  (The following was written in red on the class notes, which is the color that signifies we are working with respect to .)   (And this was blue in the class notes--a side note that was added after we antidifferentiated the -term and immediately before we drew the right-triangle diagram.) NOTE that the \"Let\" statement is actually saying \"Let be .\" And recall that this means that   AND .    (Back to red ink now, wherever the markup language will allow it.) The integral becomes   (Blue ink again--a side note.) Note that because of the restrictions on , must be nonnegative, so that . That was used in the above calculations to replace \" \" with \" .\"  To figure out how to put the antiderivative back into -language, we use a right-triangle diagram:   A right-triangle diagram needed to finish Example 2.   Reference triangles in Quadrants One and Four are labeled so that the sine of the angle theta is x-over-3.  Reference triangles for angle theta lie in Quadrants One and Four. In each Quadrant, the hypotenuse has been labeled as 3, the vertical leg has been labeled as x, and the resulting value for the horizontal leg is the square root of (9 minus x-squared). It is noted that in each Quadrant, the cotangent of theta is (the square root of (9 minus x-squared)), over x.    Now we can finish up by putting the antiderivative formula back into -language. We rejoin the calculations above, already in progress:  (We start out in red ink for the \" -language\" and will switch for the final step when we translate back to \" -language.\") The integral is      (This was Example 3 from the class notes.) Evaluate .   Note first that . Then the integral can be written as  (The following was written in red on the class notes, which is the color that signifies we are working with respect to .)  (And this was blue in the class notes--a side note that was added after we antidifferentiated the -term and immediately before we drew the right-triangle diagram.) NOTE that the \"Let\" statement is actually saying \"Let be .\" And recall that this means that   AND .    (Back to red ink now, where the markup language will allow it.) The integral becomes   Below is the diagram that helped us put the antiderivative back into -language.   A right-triangle diagram needed to finish Example 3.   Reference triangles in Quadrants One and Four are labeled so that the tangent of the angle theta is (x minus 3)-over-(the square root of 2).  Reference triangles for angle theta lie in Quadrants One and Four. In each Quadrant, the vertical leg has been labeled as x minus 3, the horizontal leg has been labeled as the square root of 2, and the resulting value for the hypotenuse is the square root of ((x minus 3)-squared plus (the square root of 2)-squared).       (These were Examples 4 to 7 from the class notes.) Find the milk equation for each integral. You may need to almost complete the square to get a quadratic expression into one of the three appropriate forms.  (a) : Let . ( Then )  (b) : Let . ( Then )  (c) : Let . ( Then )  (d) : Note first that . Let . ( Then )     "
},
{
  "id": "trigsub-2",
  "level": "2",
  "url": "trigsub.html#trigsub-2",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": " (This was really Example 1 from the class notes. The markup language I'm using, \"PreTeXt,\" imposes rules about how things are supposed to be numbered.) Evaluate .   (The following was written in red on the class notes, which is the color that signifies we are working with respect to .)  (And this was blue in the class notes --a side note that was added after we antidifferentiated the -term and immediately before we drew the right-triangle diagram.) NOTE that the \"Let\" statement is actually saying \"Let be .\" And recall that this means that   AND (either or ).    (Back to red ink now, where the markup language will allow it.) The integral becomes   Note that because of the restrictions on , must be nonnegative, so that . That was used in the above calculations to replace \" \" with \" .\"  To figure out how to put the antiderivative back into -language, we use a right-triangle diagram:   A right-triangle diagram needed to finish Example 1.   Reference triangles in Quadrants One and Three are labeled so that the secant of the angle theta is x-over-5.  Reference triangles for angle theta lie in Quadrants One and Three. In Quadrant One, the hypotenuse has been labeled as x, the horizontal leg has been labeled as 5, and the resulting value for the vertical leg is the square root of (x-squared minus 25). In Quadrant Three, the hypotenuse has been labeled as negative-x, the horizontal leg has been labeled as negative-5, and the resulting value for the vertical leg is negative-one times the square root of (x-squared minus 25).    Now we can finish up by putting the antiderivative formula back into -language. We rejoin the calculations above, already in progress:  (We start out in red ink for the \" -language\" and will switch for the final step when we translate back to \" -language.\") The integral is   A subtle point: If you saw this problem in a textbook and looked up the answer in the back of the book, you might see the answer listed as . And that's not what we obtained! Were we wrong? Would that book be wrong? Neither. Using our algebra and logarithm-law skills, we note that our answer can be rewritten: We have where is a new name for . Do you see what we did there? That was the arbitrary constant mashup !   "
},
{
  "id": "trigsub-3",
  "level": "2",
  "url": "trigsub.html#trigsub-3",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": " (This was really Example 2 from the class notes.) Evaluate .  (The following was written in red on the class notes, which is the color that signifies we are working with respect to .)   (And this was blue in the class notes--a side note that was added after we antidifferentiated the -term and immediately before we drew the right-triangle diagram.) NOTE that the \"Let\" statement is actually saying \"Let be .\" And recall that this means that   AND .    (Back to red ink now, wherever the markup language will allow it.) The integral becomes   (Blue ink again--a side note.) Note that because of the restrictions on , must be nonnegative, so that . That was used in the above calculations to replace \" \" with \" .\"  To figure out how to put the antiderivative back into -language, we use a right-triangle diagram:   A right-triangle diagram needed to finish Example 2.   Reference triangles in Quadrants One and Four are labeled so that the sine of the angle theta is x-over-3.  Reference triangles for angle theta lie in Quadrants One and Four. In each Quadrant, the hypotenuse has been labeled as 3, the vertical leg has been labeled as x, and the resulting value for the horizontal leg is the square root of (9 minus x-squared). It is noted that in each Quadrant, the cotangent of theta is (the square root of (9 minus x-squared)), over x.    Now we can finish up by putting the antiderivative formula back into -language. We rejoin the calculations above, already in progress:  (We start out in red ink for the \" -language\" and will switch for the final step when we translate back to \" -language.\") The integral is    "
},
{
  "id": "trigsub-4",
  "level": "2",
  "url": "trigsub.html#trigsub-4",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": " (This was Example 3 from the class notes.) Evaluate .   Note first that . Then the integral can be written as  (The following was written in red on the class notes, which is the color that signifies we are working with respect to .)  (And this was blue in the class notes--a side note that was added after we antidifferentiated the -term and immediately before we drew the right-triangle diagram.) NOTE that the \"Let\" statement is actually saying \"Let be .\" And recall that this means that   AND .    (Back to red ink now, where the markup language will allow it.) The integral becomes   Below is the diagram that helped us put the antiderivative back into -language.   A right-triangle diagram needed to finish Example 3.   Reference triangles in Quadrants One and Four are labeled so that the tangent of the angle theta is (x minus 3)-over-(the square root of 2).  Reference triangles for angle theta lie in Quadrants One and Four. In each Quadrant, the vertical leg has been labeled as x minus 3, the horizontal leg has been labeled as the square root of 2, and the resulting value for the hypotenuse is the square root of ((x minus 3)-squared plus (the square root of 2)-squared).     "
},
{
  "id": "trigsub-5",
  "level": "2",
  "url": "trigsub.html#trigsub-5",
  "type": "Example",
  "number": "10",
  "title": "",
  "body": " (These were Examples 4 to 7 from the class notes.) Find the milk equation for each integral. You may need to almost complete the square to get a quadratic expression into one of the three appropriate forms.  (a) : Let . ( Then )  (b) : Let . ( Then )  (c) : Let . ( Then )  (d) : Note first that . Let . ( Then )    "
},
{
  "id": "sixbasicseriesmq",
  "level": "1",
  "url": "sixbasicseriesmq.html",
  "type": "Section",
  "number": "",
  "title": "Mini-review of course topics: [NUMERICAL SERIES]  The six basic series",
  "body": " Mini-review of course topics: [NUMERICAL SERIES] The six basic series  The overall idea: Believe it or not, it DOES make sense to consider adding up an infinite list of numbers : We can take an existing or underlying sequence, create a NEW sequence of partial sums, and see whether that sequence of partial sums has a limit. We have to be careful not to assume things like commutativity or associativity that is, we can't assume that presenting the original sequence terms in a different order will give us the same sum, and we can't assume that grouping them different ways will give us the same sum.  Memory work do these NOW , OUT LOUD :   STATE the geometric series sum formula.   TELL what values of lead to convergent -series and what values of lead to divergent -series.   STATE the Divergence Test.   TELL why the converse to the Divergence Test (which would be If the underlying sequence of a series has a limit of , then the series converges ) is FALSE , by giving a counterexample. ( Spoiler: The harmonic series is a good counterexample probably the best one!)  For the quiz, be ready to do the following:   You will be given a general formula and the first few specific terms of six series one of each type. You will need to tell which is which:   a geometric series (you will need to tell what the common ratio is),  the harmonic series,  the series ,  a -series (you will need to tell what is),  a telescoping series, and  a series whose underlying sequence does NOT converge to 0.   You will also need to tell whether each series CONVERGES or DIVERGES .  Finally, you will need to pick at least ONE series whose sum can be found exactly (generally the geometric series if it converges or the telescoping series) and tell what that exact sum is.   Example  Complete ALL three bullets.   For each series, circle HAS a finite sum or has NO finite sum as appropriate.  For at least ONE series with a finite sum, give the sum exactly.  Then fill in the blanks in the statements below the table.      series  formula  conclusions (circle one and fill in the blank as appropriate)    #1     has a finite sum (sum ) OR has no finite sum    #2   (note that )  has a finite sum (sum ) OR has no finite sum    #3     has a finite sum (sum ) OR has no finite sum    #4     has a finite sum (sum ) OR has no finite sum    #5     has a finite sum (sum ) OR has no finite sum    #6     has a finite sum (sum ) OR has no finite sum     Your responses:   Series # is a geometric series with first term and common ratio .  Series # is a telescoping series.  Series # is a -series ( NOT the harmonic series) with = .  Series # is the harmonic series.  Series # has a sequence of partial sums that bounce back and forth between 0 and 1.  Series # has an underlying sequence whose limit is , NOT 0.      "
},
{
  "id": "sixbasicseriesmq-4-2",
  "level": "2",
  "url": "sixbasicseriesmq.html#sixbasicseriesmq-4-2",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": "Complete ALL three bullets.   For each series, circle HAS a finite sum or has NO finite sum as appropriate.  For at least ONE series with a finite sum, give the sum exactly.  Then fill in the blanks in the statements below the table.      series  formula  conclusions (circle one and fill in the blank as appropriate)    #1     has a finite sum (sum ) OR has no finite sum    #2   (note that )  has a finite sum (sum ) OR has no finite sum    #3     has a finite sum (sum ) OR has no finite sum    #4     has a finite sum (sum ) OR has no finite sum    #5     has a finite sum (sum ) OR has no finite sum    #6     has a finite sum (sum ) OR has no finite sum     Your responses:   Series # is a geometric series with first term and common ratio .  Series # is a telescoping series.  Series # is a -series ( NOT the harmonic series) with = .  Series # is the harmonic series.  Series # has a sequence of partial sums that bounce back and forth between 0 and 1.  Series # has an underlying sequence whose limit is , NOT 0.    "
},
{
  "id": "computabilityprimer",
  "level": "1",
  "url": "computabilityprimer.html",
  "type": "Section",
  "number": "",
  "title": "Math 303\/304 handout: A computability-theory\/Turing-machine primer",
  "body": " Math 303\/304 handout: A computability-theory\/Turing-machine primer   Sets  (Ignore the numbering of the items in this document. The markup language I'm using, \"PreTeXt,\" imposes rules about how things are supposed to be numbered.)  A subset of is said to be computable if there is an algorithm that will give a correct Yes or No answer to every question of the form Is in ?  Examples:  the set of all even natural numbers,  the set of all prime numbers, and  any finite set.    A subset of is said to be computably enumerable if there is an algorithm that can list its elements---or, alternatively, if there is an algorithm that can give all correct Yes answers to questions of the form Is in ? but no No answers .  A set is computable if and only if both and its complement are computably enumerable .  (Click on Proof below to see a proof of this Proposition.)   ( . )  (Sketch.) Suppose that is computable. Run its algorithm for . Anytime you obtain a Yes answer for some , put on the list for ; any time you obtain a No answer for some , put on the list for .  ( . )  (Sketch.) Suppose that and are both computably enumerable. The algorithm for answering a question of the form Is in ? is essentially Watch both lists : The number has to appear eventually on either the list or the list, and when it appears on one of them, then you will know whether it is an element of .     Functions  A function from to is Turing-computable if there is a Turing machine such that for every in the domain of , the Turing machine, when given input , EVENTUALLY HALTS and produces output .  ( NOTE that this does not require that the function be total, that is, that its domain be all of . Its domain may well be a proper subset of . We generally use the term partial -computable function to refer to a Turing-computable function whose domain is known not to be, or simply is not known to be, total.)  A Turing machine can handle any number of inputs, if we adopt a convention on how the inputs are to be rendered on the tape. For instance, we can enter the ordered triple , , as follows:   A Turing machine with inputs 3, 0, and 4.   A Turing machine whose tape has four consecutive ones, a space, another one, another space, and five more consecutive ones. The read-write head points at the leftmost one.    Then we can consider functions from to , for any positive .    Connections between SETS and FUNCTIONS  The characteristic function of a set is the total function defined as follows: For any natural number , is   THINKING BACK TO COMPUTABLE SETS. It is not hard to see that a SET of natural numbers is computable IF AND ONLY IF  its characteristic function, , is a computable function .  THINKING BACK TO COMPUTABLY ENUMERABLE SETS. More properly, a subset of is computably enumerable if it is the domain of some Turing-computable function. (That's the actual, official DEFINITION.)  ( NOTE: We imagine the algorithms to be given in some order---lexicographic, usually---and we denote the Turing-computable function that is computed by the th algorithm as , with the corresponding computably enumerable set denoted . )  In case you're wondering, here's the connection between that official definition and the listability idea:  Suppose that is a Turing-computable function. (We will show that there is an algorithm that lists the domain of .) Dovetail the Turing computations for input , input , input , and so on. Every time a computation converges on some input , put on the list. Certainly the list then consists of all numbers in the domain of .  We can even prove that \"if there is an algorithm that lists the elements of the set, then the set is the domain of some Turing-computable function\"---but that other direction takes more work! It depends on the ideas mentioned below.  Historically, many different minds were working (in the 1920s and ’30s) on the question of what it meant for a function of natural numbers to be effectively calculable.   Alonzo Church proposed -definability,  Haskell Curry proposed definability by combinators ,  Kurt Gödel and Stephen Kleene proposed general recursiveness , and  Alan Turing proposed computability by [Turing] machine .  We could also consider (though this idea came up later) flowchart computability.  It can be shown that all of these characterizations are EQUIVALENT: Any function that is in one category (e.g. any -definable function) must also be in all of the other categories (that is, it must be definable by combinators and Turing-computable, for instance) .  We adopt the idea that Every function for which there is an intuitively effective process for computing its values can be shown to be in any of these categories and hence in all of them ; for example, it must be Turing-computable and also general recursive . This is called Turing's Thesis , the Church-Turing Thesis, or Church's Thesis.   "
},
{
  "id": "computabilityprimer-2-2",
  "level": "2",
  "url": "computabilityprimer.html#computabilityprimer-2-2",
  "type": "Definition",
  "number": "13",
  "title": "",
  "body": "(Ignore the numbering of the items in this document. The markup language I'm using, \"PreTeXt,\" imposes rules about how things are supposed to be numbered.)  A subset of is said to be computable if there is an algorithm that will give a correct Yes or No answer to every question of the form Is in ? "
},
{
  "id": "computabilityprimer-2-4",
  "level": "2",
  "url": "computabilityprimer.html#computabilityprimer-2-4",
  "type": "Definition",
  "number": "14",
  "title": "",
  "body": "A subset of is said to be computably enumerable if there is an algorithm that can list its elements---or, alternatively, if there is an algorithm that can give all correct Yes answers to questions of the form Is in ? but no No answers . "
},
{
  "id": "computabilityprimer-2-5",
  "level": "2",
  "url": "computabilityprimer.html#computabilityprimer-2-5",
  "type": "Proposition",
  "number": "15",
  "title": "",
  "body": "A set is computable if and only if both and its complement are computably enumerable .  (Click on Proof below to see a proof of this Proposition.) "
},
{
  "id": "computabilityprimer-2-6",
  "level": "2",
  "url": "computabilityprimer.html#computabilityprimer-2-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " ( . )  (Sketch.) Suppose that is computable. Run its algorithm for . Anytime you obtain a Yes answer for some , put on the list for ; any time you obtain a No answer for some , put on the list for .  ( . )  (Sketch.) Suppose that and are both computably enumerable. The algorithm for answering a question of the form Is in ? is essentially Watch both lists : The number has to appear eventually on either the list or the list, and when it appears on one of them, then you will know whether it is an element of .  "
},
{
  "id": "computabilityprimer-3-2",
  "level": "2",
  "url": "computabilityprimer.html#computabilityprimer-3-2",
  "type": "Definition",
  "number": "16",
  "title": "",
  "body": "A function from to is Turing-computable if there is a Turing machine such that for every in the domain of , the Turing machine, when given input , EVENTUALLY HALTS and produces output .  ( NOTE that this does not require that the function be total, that is, that its domain be all of . Its domain may well be a proper subset of . We generally use the term partial -computable function to refer to a Turing-computable function whose domain is known not to be, or simply is not known to be, total.) "
},
{
  "id": "TuringMachine",
  "level": "2",
  "url": "computabilityprimer.html#TuringMachine",
  "type": "Figure",
  "number": "17",
  "title": "",
  "body": " A Turing machine with inputs 3, 0, and 4.   A Turing machine whose tape has four consecutive ones, a space, another one, another space, and five more consecutive ones. The read-write head points at the leftmost one.   "
},
{
  "id": "computabilityprimer-4-2",
  "level": "2",
  "url": "computabilityprimer.html#computabilityprimer-4-2",
  "type": "Definition",
  "number": "18",
  "title": "",
  "body": "The characteristic function of a set is the total function defined as follows: For any natural number , is  "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "A placeholder file",
  "body": " A placeholder file   Line here     Monday 8\/22  Line here    Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Another placeholder file",
  "body": " Another placeholder file   Monday      Wednesday      Friday     "
},
{
  "id": "tryquiz",
  "level": "1",
  "url": "tryquiz.html",
  "type": "Section",
  "number": "",
  "title": "A quiz",
  "body": " A quiz   The quiz material would be here.  "
},
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts (also ignore)",
  "body": " Handouts (also ignore)    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework (umm . . . yeah, ignore this part too)",
  "body": " Homework (umm . . . yeah, ignore this part too)    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

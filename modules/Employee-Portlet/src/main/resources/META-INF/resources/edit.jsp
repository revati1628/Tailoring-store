<%@ include file="/init.jsp" %>
<%@ page import="com.training.employee.service.model.Employee" %>
<%@ page import="com.liferay.portal.kernel.util.Constants" %>
<%@ page import="com.liferay.portal.kernel.util.JavaConstants" %>

    <%
    String action="";
    Employee employee=(Employee) request.getAttribute("employee");
    if(employee == null)
    {
    action=Constants.ADD;
    }
    else
    {
    action=Constants.EDIT;
    }
    %>

<portlet:actionURL var="employeeFormSubmission" />


<portlet:renderURL var="renderURLForRedirect" >
</portlet:renderURL>

<form action="<%=employeeFormSubmission%>" method="POST">

        <div class="form-group">
          <label for="<portlet:namespace/>employeeID" class="form-label" path="employeeID">Employee ID</label>
          <%
            if(action.equals(Constants.EDIT))
            { %>
            <input type="number" class="form-control" id="<portlet:namespace/>employeeID"
            name="<portlet:namespace/>employeeID" value='<%=employee.getEmployeeID()%>'
             />


            <% }else { %>

            <input type="number" class="form-control" id="<portlet:namespace/>employeeID"
                        name="<portlet:namespace/>employeeID"  />
            <% } %>




        </div>

        <div class="form-group">
          <label for="<portlet:namespace/>employeeName" class="form-label" path="employeeName">employee Name</label>
          <input type="text" class="form-control" id="<portlet:namespace/>employeeName"
           name="<portlet:namespace/>employeeName"
             value='<%=(action.equals(Constants.EDIT) ? employee.getEmployeeName() : "")%>'/>
        </div>

        <div class="form-group">
                  <label for="<portlet:namespace/>departmentID" class="form-label" path="departmentID">Department ID</label>
                  <input type="text" class="form-control" id="<portlet:namespace/>departmentID"
                   name="<portlet:namespace/>departmentID"
                     value="<%=(action.equals(Constants.EDIT) ? employee.getDepartmentID() : "")%>"/>
                </div>

        <div class="form-group">
          <label for="<portlet:namespace/>address" class="form-label" path="address">Employee Address</label>
          <input type="text" class="form-control" id="<portlet:namespace/>address"
          name="<portlet:namespace/>address"
            value='<%=(action.equals(Constants.EDIT) ? employee.getAddress() : "")%>'/>

             <input id="<portlet:namespace/>action" value="<%=action%>"
                           class="form-control" name="<portlet:namespace/>action"/>
        </div>
    <br/>



        <input type="submit" class="btn btn-success" value="Save" />
</form>